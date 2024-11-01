const Data = require('../models/dataModel');

// /:firstname then search and return 1 data
const getData = async (req, res) => {
	try {
		const { firstName } = req.params;

		const data = await Data.findOne({ firstName });

		res.json({ data });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server Error' });
	}
};

// get all data. if page ?? 1 w limit is default 10 we didn;t change not required
const getDatas = async (req, res) => {
	try {
		const page = req.query.page * 1 || 1; // * 1 to make it integer value
		const limit = req.query.limit * 1 || 10; // default 10
		const skip = (page - 1) * limit; // calc to know how much skip baed on page and limit

		const totalItems = await Data.countDocuments(); // arr.length
		// const totalPages = Math.ceil(totalItems / limit);
		const data = await Data.find().skip(skip).limit(limit);
		console.log('data', data);
		res.json({
			data,
			totalItems,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server Error' });
	}
};

module.exports = {
	getData,
	getDatas,
};
