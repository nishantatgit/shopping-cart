const Cart = require('../models/cart');

exports.get_cart_details = (req, res) => {
    console.log('   get called for cart   ---------');
    Cart.find({ userid : req.params.userid },(err, carts) => {
        res.json(JSON.stringify(carts));
    });
}

exports.add_item_to_cart = (req, res) => {
    let cart = new Cart(req.body);
    cart.save(function(err, cart){
        if(err) return handleError(res,err);
        console.log(`${cart.cartid} with ${cart.userid} saved to database`);
        res.json({
           "cartid" : cart.cartid
        });
    });
}

exports.delete_item_from_cart = (req, res) => {
    Cart.remove( { pid : req.params.pid} , function(err,items){
        if(err){
            return handleError(res,err);
        }
        res.json({
            noOfItemsRemoved : items.n
        });
    });
}

exports.clear_cart = (req, res) => {
    Cart.remove({}, function(err, cartItems){
        if(err) return handleError(res,err);
        res.json({
            "removed_all" : true
        });
    });
}

function handleError(res,err){
    console.log('error : ', err);
    return res.send(500,err);
}