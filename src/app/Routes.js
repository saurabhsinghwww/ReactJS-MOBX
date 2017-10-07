import React, {Component} from "react";//From node_modules
//import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//anchor link will take to another link in this case can't use om case of BrowserRouter
// how broswer link better in case of SEO search engine?
import {App} from "./App";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";

import Cart from "./cart/components/Cart";
//import ProductList from "./product/components/ProductList";
import ProductRoutes from "./product/Routes";


import Login from "./auth/components/Login";

import AuthRoute from "./auth/components/AuthRoute";


export default function Routes () {

   return  (

        <Router>

          <App>

            <Switch>

               <AuthRoute path="/" exact component={Home}/> 

                <AuthRoute path="/about" component={About} /> 

                <AuthRoute path="/contact" component={Contact}/> 
                
                <AuthRoute path="/cart" component={Cart}/>
                
                <AuthRoute path="/products" component={ProductRoutes}/> 
                
                <Route path="/login" component={Login} />

            </Switch>
          
          </App>
        
        </Router>

   )

}

// function component life cyccle method and don't want stsates (like romx manaing state)