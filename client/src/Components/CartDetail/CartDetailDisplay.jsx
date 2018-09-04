import React from 'react';

export const CartDetailDisplay = props => {
    const renderCartDetails = props => {
        const getUniqueProducts = arr => {
            if(arr && arr.length){
                let uniqueList = {}
                for(let idx = 0 ; idx < arr.length; idx ++){
                    if( uniqueList[arr[idx].pid]){
                        uniqueList[arr[idx].pid].quantity += 1
                    }else{
                        uniqueList[arr[idx].pid] = arr[idx]; 
                        uniqueList[arr[idx].pid].quantity = 1;
                    }
                }
                let retArr = [] ,product;
                for(product in uniqueList){
                    retArr.push(uniqueList[product]);
                }
                return retArr;
            }
        }
        
        let {cartDetails = []} = props;

        if(cartDetails.length){
           cartDetails = getUniqueProducts(cartDetails);
           return cartDetails.map( cartDetail => 
                (
                    <div className="row border-bottom border-light align-items-center cart-detail" key={cartDetail.pid}>
                        <div className="col-xs-12 col-md-3  p-3"><img className="mw-100 rounded-left mb-2" src={`${window.location.origin}/imgs/${cartDetail.pid}.jpg`}/></div>
                        <div className="col-xs-12 col-md-4 text-center p-3 d-flex justify-content-center">
                            <div className="text-left">
                                <div className="font-weight-bold text-secondary mb-2">{cartDetail.pname}</div>
                                <div><span className="text-secondary">Price : </span><span className="float-right">${cartDetail.price}</span></div>
                                <div><span className="text-secondary">Quantity : </span><span className="float-right">{cartDetail.quantity}</span></div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-2">
                            <div><span className="text-secondary font-weight-bold">Subtotal : </span><span className="float-right">${cartDetail.price * cartDetail.quantity }</span></div>
                        </div>
                        <div className="col-xs-12 col-md-2 text-center">
                            <button className="btn btn-primary bg-info text-white border-0" onClick={props.removeFromCart.bind(undefined,cartDetail.pid)}>Remove</button> 
                        </div>
                    </div>
                )
           );
        }
        else{
            return (<div className="row align-items-center text-center text-secondary">
                        <h5 className="m-auto">It's quite lonely here!</h5>
                    </div>);
        }
    }
    let {cartDetails = []}  = props;
    console.log('--- props ---> ',props);
    return(
            <section className="container mt-4 mb-4 text-secondary">
                {renderCartDetails(props)}
                { 
                     cartDetails.length ? <div>
                                                    <h5 className="text-left mt-3 float-right">Total : ${(cartDetailsArray => cartDetailsArray.reduce((totalPrice,cartDetail) => totalPrice + cartDetail.price ,0))(cartDetails)}</h5>
                                                    <div className="mt-5 text-center">
                                                        <button className='btn btn-primary bg-info text-white mt-4 mr-4 border-0'>Proceed to Checkout</button>
                                                        <button className='btn btn-primary bg-info text-white mt-4 border-0' onClick={props.clearCart}>Clear Cart</button>
                                                    </div>
                                            </div> : null
                } 
            </section>
        );
}