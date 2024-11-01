const User = require('../models/userModel');
const Data = require('../models/dataModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSign = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
// register the name,email,password
const register = async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		res.status(400);
		throw new Error('All fields are mandatory!');
	}

	const userAvailable = await User.findOne({ email });
	if (userAvailable) {
		res.status(400);
		throw new Error('User already registered!');
	}

	// hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = bcrypt.hashSync(password, salt);

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			email: user.email,
		});
	} else {
		res.status(400);
		throw new Error('User data is not valid');
	}
};

// login and create jwt toke
const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400);
		throw new Error('All fields are mandatory!');
	}

	const user = await User.findOne({ email });

	if (!user) {
		res.status(404);
		throw new Error('User not found!');
	}

	if (!bcrypt.compareSync(password, user.password)) {
		res.status(404);
		throw new Error('invalid credentials');
	}

	const accessToken = jwtSign(user._id);
	// jwt.sign(
	// 	{
	// 		id: user._id,
	// 	},
	// 	process.env.JWT_SECRET,
	// 	{ expiresIn: '1d' }
	// );

	res.cookie('jwt', accessToken, {
		maxAge: 24 * 60 * 60 * 1000, // 1d
		httpOnly: true,
	});

	// return user without pass (we can do i shcema select -password)
	const { password: userPass, ...data } = user.toJSON();

	res.status(200).json({ user: data });
};

// middlware only who;s logged in can access some routes
const authenticated = async (req, res, next) => {
	try {
		const cookie = req.cookies['jwt'];
		const claim = jwt.verify(cookie, process.env.JWT_SECRET);
		if (!claim) {
			res.status(401).json({ message: 'Not Authorized' });
		}
		const user = await User.findById(claim.id).select('-password');
		req.user = user;
		// res.send(user);
		next();
	} catch (err) {
		res.status(401).json({ message: 'Not Authorized' });
	}
};

// check if authenticated
const currentUser = (req, res) => {
	try {
		const user = req.user;
		if (!user) {
			throw new Error('Not Authorized');
		}
		res.status(200).json({ user });
	} catch (e) {
		res.status(401).json({ message: 'Not authorized' });
	}
};

// logout clear cookie
const logout = (req, res) => {
	res.cookie('jwt', '', { maxAge: 0 });
	res.json({ message: 'sucess' });
};

// not completed; the idea to push the data to user liked array
const addRecomended = async (req, res) => {
	try {
		const user = await User.findByI(user._id);
		// get data id and push it
		user.liked.push();
		await user.save();
	} catch (error) {
		console.log(error);
	}
};

// should be authenticated and then populated with liked which r datas
const getRecomendeds = async (req, res) => {
	try {
		const user = req.user;
		console.log(req.user);
		console.log('hello');
		if (!user) {
			res.status(401);
			throw new Error('Not Authorized');
		}
		const userData = await User.findById(user._id); //.populate('datas');

		res.status(200).json({ userData });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	register,
	login,
	authenticated,
	currentUser,
	logout,
	getRecomendeds,
	addRecomended,
};
