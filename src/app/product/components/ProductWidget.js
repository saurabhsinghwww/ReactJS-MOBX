
import React from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";

import {inject, observer} from "mobx-react";


function ProductWidget(props) { 
        return (
            <div> 
                <article className="card">
                    <header>
                        <h2>{props.product.name}</h2>
                    </header>

                    <p>
                        Weight: {props.product.weight}
                    </p>

                    <p>
                        Price: {props.product.price}
                    </p>

                    <p>
                        Year: {props.product.year}
                    </p>

                    <footer>
                        
                        <Link to={`/products/edit/${props.product.id}`}
                              className="button">
                                Edit
                        </Link>
                      

                        <button onClick={() => props.cart.addItem(props.product)}>
                            +Cart
                        </button>
                    </footer>
                </article>
             
            </div>
        )
} 


ProductWidget.defaultProps = {
    
}

ProductWidget.propTypes = {
    
}

export default  inject("cart") (observer(ProductWidget));

// ES6 feature {`/products/edit/${props.product.id}`} extracting value instead of plus