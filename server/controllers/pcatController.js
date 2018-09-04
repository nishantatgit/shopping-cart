const pcat = require('../models/pcat');

exports.category_list_get = (req, res) => {
    pcat.find({}, (err, categories) => {
        res.json(JSON.stringify(categories));
    });
}