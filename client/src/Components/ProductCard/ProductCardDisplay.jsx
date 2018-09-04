import React from 'react';
import {Link} from 'react-router-dom';

export const ProductCardDisplay = ({product, addToCartHandler}) => {
    return(
        <section key={product.pid} className="col-6 col-md-4 p-2">
            <div className="card h-100">
                <img className="card-img-top" src={`${window.location.origin}/imgs/${product.pid}.jpg`} alt={`image of ${product.pname}`} title={product.pname}/>
                <div className="card-body d-flex flex-column">
                    <div className="card-title"><span>{product.pname}</span><span className="font-weight-bold float-right mr-1">${product.inventories.length && product.inventories[0].price}</span></div>
                    <p className="text-secondary pb-2">{product.pdesc}</p>
                    <div className="d-flex justify-content-center mt-auto">
                        <Link to={`/product-detail/${product.pid}`} className="btn mr-3 bg-info text-white">More Info</Link>
                        <button className="btn  float-right bg-info text-white" onClick={addToCartHandler}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
