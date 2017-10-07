import React from "react";

import {observer} from "mobx-react";

//export default function CartItem(props) { // function component
@observer
export default class CartItem extends React.Component{ // function component    
   // ref cannot use with function component
    // ref to get access to real dom
    
    //below input is uncontrolled components bcoz ref needed to update virtual dom
     
     
     //statefull component?

    //es5 let item = props.item
  render() {
        let {item} = this.props;
        // curly braces is deconstructer operater here
        let {props} = this.props;
        return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                         <input name="quantity" 
                             
                            ref={elem => this.input= elem}
                            />
                          </td>
                          {item.quantity}
                    <td> 
                        <button onClick={ ()=>this.props.onUpdate(this.input.value)} > 
                            Update
                        </button>

                    </td>

                    <td> 
                        <button onClick={this.props.onRemove} > 
                            Delete
                        </button>
                    </td>

                </tr>
            )
    
  }
}