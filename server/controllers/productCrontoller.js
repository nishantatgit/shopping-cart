const product = require('../models/product');
const inventory = require('../models/inventory');

exports.product_list_get = (req, res) => {  
                                        product.aggregate([{
                                            $lookup: {
                                                from : "inventories",
                                                localField : "pid",
                                                foreignField : "productid",
                                                as : "inventories"
                                            }
                                        }]).exec(function(err, products){
                                            res.json(JSON.stringify(products));  
                                        });
                                    }; 

exports.product_list_get_by_category = (req, res) => {
    product.find({ pcatid : req.params.pcatid}, function(error, products){
        res.json(JSON.stringify(products));
       });
}
