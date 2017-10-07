
import React, {Component} from "react";
import PropTypes from "prop-types";

import {inject, observer} from "mobx-react";

@inject("productState")
@observer
export default class ProductEdit extends Component {
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
      let id = this.props.match.params.id;
      // match.params are from Router

      if (id) { //edit
          
         this.props.productState.getProduct(id);

      } else { // create

        this.props.productState.createProduct();

      }

    }

    onValueChange(e) {

        let name = e.target.name;
        let value =  e.target.value;

        console.log(name, value);

        this.props.productState.setProductValue(name, value);

    }

    save(e) {
        
        //prevent default , prevent submitting the whole form to the server on type of submit button, onSubmit
        e.preventDefault();
        
        this.props.productState.saveProduct();
        
    }
    
    render() {

        let product = this.props.productState.product;

        return (
            <div> 
            <h2>Product</h2>
           
            <form onSubmit={ (e) => this.save(e)}>

                 Name

                 <input name="name"
                        value={product.name}
                        onChange= {(e) => this.onValueChange(e)}/>

                 Year

                 <input name="year"
                        value={product.year}
                        onChange= {(e) => this.onValueChange(e)}/>

                 <button type="submit">
                     Save
                 </button>    

            </form>    


            </div>
        )
    }
} 


// controlled component because not using ref for changing input field


ProductEdit.defaultProps = {
    
}

ProductEdit.propTypes = {
    
}

//react snipet? for generating scnipet code for quick start