import React from "react";

import {NavLink} from "react-router-dom";

import {inject, observer} from "mobx-react";

@inject("cart")
@observer
export class Header extends React.Component {

    constructor(props) {
        super(props);//calls base class constructor.
        console.log(props.title);
    }

    //Callback before loading view
    //before render method call
    componentWillMount() { // diffcomponentwillUpdate
        console.log("Components going to be rendered....rocking ...");
    }

    //Callback before loading view
    //before render method call
    componentWillUnmount() { // diffcomponentdidUpdate
        console.log("Components going to unloaded....destroying...");
    }

    //Called once render method call is done....After view is loaded.
    componentDidMount() {
        console.log("Components loaded...");
    }

    render() {
        console.log("header rendered...");
        return (
            <div>

                <h1>{this.props.title}</h1>

                <NavLink to="/" exact className="button" activeClassName="success">
                    Home
                </NavLink>

                <NavLink to="/contact" exact className="button" activeClassName="success">
                    Contact
                </NavLink>


                <NavLink to="/about" exact className="button" activeClassName="success">
                    About
                </NavLink>

                <NavLink to="/cart" exact className="button" activeClassName="success">
                    Cart [{this.props.cart.cartSize}] 
                    -RS {this.props.cart.amount}
                </NavLink>
                
                <NavLink to="/products" exact className="button" activeClassName="success">
                     Products
                </NavLink>

                <NavLink to="/login" exact className="button" activeClassName="success">
                     Login
                </NavLink>


            </div>

        )

    }

}
