import React from 'react';
import {Link} from 'react-router-dom';

export const SidebarDisplay = (props) => {
    const renderFilters = ({categories}) => {
            return categories.map(
                category => <li key={category.pcatid} className={`list-group-item ${props.currentCategory === category.pcatid ? 'bg-info' : '' }`}>
                                <Link  className={`${props.currentCategory === category.pcatid ? 'text-white' : 'text-info'}`} to={`/products/${category.pcatid}`}>
                                    {category.pcatname}
                                </Link>
                            </li>
            );
        }
    return(
            <section className="sidenav">
                <ul className="list-group">
                    {renderFilters(props)}
                    <li className="list-group-item text-info">
                        <Link className="text-info" to='/products'>See All</Link>
                    </li>
                </ul>
            </section>
        );
}
