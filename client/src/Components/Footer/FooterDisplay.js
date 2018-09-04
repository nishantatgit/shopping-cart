import React from 'react';

export class FooterDisplay extends React.Component{
    render(){
        return(
            <footer className="bg-dark w-100">
                <div className="container mt-4 ml-auto mr-auto text-center font-small">
                    <div className="row">
                        <div className="col">
                            <ul className="list-unstyled mt-4 mb-4">
                                <li className=""><a class="text-white font-small" href="www.google.com">Contact Us</a></li>
                                <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                                <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                                <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col">
                        <ul className="list-unstyled mt-4 mb-4">
                        <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                        <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                        <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                        <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col">
                        <ul className="list-unstyled mt-4 mb-4">
                        <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                        <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                        <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                        <li className=""><a class="text-white" href="www.google.com">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}