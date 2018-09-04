import React from 'react';

export const ProductDetailDisplay = props => {
    let cartDetail = props.cartDetail.filter( v => v.pid === props.pid);
    let {productList} = props;
    let productToDisplay = productList.length && productList.filter( product => product.pid === props.pid)[0];
    let addToCartObject = {
        pid : productToDisplay.pid,
        pname : productToDisplay.pname,
        price : productToDisplay.inventories.length && productToDisplay.inventories[0].price,
        cardid : 'cart-0001',
        pcatid : 'pcat-1',
        userid : 'usr-00001'
    };
    return(
        <section className="text-center d-flex h-100 justify-content-around border">
            <div className="col-4 p-0">
                <img className="mw-100" src={`${window.location.origin}/imgs/${props.pid}.jpg`} alt={productToDisplay.pname} title={productToDisplay.pname}/>
            </div>
            <div className="d-flex flex-column justify-content-space-around col-4 pt-2 border-right">
                <h4>{productToDisplay.pname}</h4>
                <p className="p-5">{productToDisplay.pdesc}</p>
                <h4>Price    ${productToDisplay.inventories[0].price}</h4>
                <button className="btn btn-primary w-40 m-auto bg-info border-0" onClick={props.addToCart.bind(undefined,addToCartObject)}>Add To Cart</button>
            </div>
            <div className="col-4 align-self-center">
                <h4> In Cart : {cartDetail.length}</h4>
            </div>
        </section>
    );
}