import React from 'react';
import {Link} from 'react-router-dom';

export const CardDisplay = props => {
    return(
        <div className="card category-card text-center col-sm-4 position-relative">
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-center align-items-center mb-2">
                    <h5 className="card-title mb-0 mr-3">{props.title}</h5>
                    <img aria-hidden="true" src={`${window.location.origin}/svg/${props.pcatid}.svg`}/>
                </div>
                <p className="card-text">{props.desc}</p>
                <Link to={`products/${props.pcatid}`} className="btn bg-info text-white w-45 ml-auto mt-auto mr-auto">Browse</Link>
            </div>
        </div>
    );
}
