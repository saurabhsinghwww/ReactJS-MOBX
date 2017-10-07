//bootstrapping 

//bring react into html

import React from "react";
import {render} from "react-dom";

//import {App} from "./app/App";

//app route configuration
import Routes from "./app/Routes";

import cartState from "./app/cart/CartState";
import productState from "./app/product/ProductState";
import authState from "./app/auth/AuthState";

import {Provider} from "mobx-react"; // it is a component, to provide data to all child components
import {useStrict} from "mobx"; 

//enforce action method to adopt fulx architechture
useStrict(true);

let store = {

    cart: cartState,
    productState: productState,
    authState: authState

}

console.log("PRODUCTION", PRODUCTION);

render(<Provider {...store}> 
          <Routes /> 
       </Provider>,
       document.getElementById("root"));

// {...store} -> store{/* whatever there in store set as prop and store as context in the memory*/}
// <Provider cart={store.cart} > can be written as this also <= <Provider {...store}> 
//render(React.createElement(App), document.getElementById("root"))

