const express = require('express');
const bodyParser = require('body-parser');

const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/pcatRouter');
const inventoryRouter = require('./routes/inventoryRouter');
const cartRouter = require('./routes/cartRouter');

const mongoose = require('mongoose');
const dbName = 'Project3';
const port = 27017;
const mongoDBUri = `mongodb://localhost:${port}/${dbName}`;
mongoose.connect(mongoDBUri, () => { console.log(`connected to database server ...`) });

const app = express();

function auth(req,res,next){
    console.log(req.headers);
    const authHeader = req.headers.authorization;
    if(!authHeader){
        const err = new Error('You are not authenticated');
        res.setHeader('WWW-Authenticate','Basic');
        err.status = 401;
        return next(err);
    }
    let auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    let username = auth[0];
    let password = auth[1];

    if(username === 'admin' && password === 'password'){
        next();
    }else{
        const err = new Error('You are not authenticated');
        res.setHeader('WWW-Authenticate','Basic');
        err.status = 401;
        return next(err);
    }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.all('/products', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  });
app.all('/category', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.use(auth);

app.use('/category',categoryRouter);
app.use('/products',productRouter);
app.use('/inventory',inventoryRouter);
app.use('/cart',cartRouter);


app.listen(30001,function(req,res){
    console.log(`server listening to port 30001`);
});