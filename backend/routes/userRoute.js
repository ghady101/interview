const router = require('express').Router();
const {
	register,
	login,
	authenticated,
	currentUser,
	logout,
	addRecomended,
	getRecomendeds,
} = require('../controllers/userController');

// public
router.post('/register', register);
router.post('/login', login);

router.get('/logout', logout);

// private
router.get('/currentUser', authenticated, currentUser);
router.get('/add', authenticated, getRecomendeds);
router.post('/add', authenticated, addRecomended);
// router.route('/add').get(getRecomendeds).post(addRecomended);

module.exports = router;
