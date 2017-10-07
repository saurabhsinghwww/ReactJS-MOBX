import React, {Component} from "react";//From node_modules
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";

import PropTypes from "prop-types";

export class App extends Component {

    constructor() {
        super();
        this.show = true;
        //this.forceUpdate(); //call render method directly example window.show in case of this.show
    }

    getChildContext() {

        return {
            appTitle: "React App"
        }

    }

/* 
    componentDidMount() {
        setInterval(()=>{
            console.log("App component mounted!");
            this.show = !this.show;
            this.setState({show: this.show});
        }, 3000);
    } */
    //Returns a view 
    //<h1 id="header"> My react training app>
    render() {        
        return ( 

        <div>
            {this.show && <Header title="React Routing"/>}
            
            {/* views container   JSX comments*/}
            
            <div>
               
                {this.props.children}

            </div>

            <Footer year={2017} company="Sapient corporation."/>
        </div>
        );
    }


}

App.childContextTypes = {

 appTitle: PropTypes.string

}