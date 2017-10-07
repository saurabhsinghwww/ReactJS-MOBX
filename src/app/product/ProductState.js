import {observable, action} from "mobx";

import restful from "../core/Restful";

//load from webpack external
import config from "config";

//fixme: load from webpack
/*
let config = {
    apiEndPoint: "http://localhost:7070"
}
*/

// endpoint?

class ProductState {
    
    @observable products = [];
    
    @action setProducts(products) {
        
        this.products = products;
        
    }
    
    @action getProducts() {
        
        restful.getJson(`${config.apiEndPoint}/api/products`)
        .then( products => {
            this.setProducts(products);
        })        
        
    }

    @observable product = {

        name: '',
        year: ''

    }

    @action createProduct(product) {
        
        this.product = {
            
                    name: '',
                    year: ''
            
        };     
        
    }

    @action setProduct(product) {
        
        this.product = product;       
        
    }

    @action getProduct(id) {
        
        restful.getJson(`${config.apiEndPoint}/api/products/${id}`)
        .then( product => {
            this.setProduct(product);
        })        
        
    }

    @action setProductValue(name, value) {
        
        this.product[name] =  value;
        
    }

    @action saveProduct() {
        
        if (this.product.id) {
    
            return restful.putJson(`${config.apiEndPoint}/api/products/${this.product.id}`, this.product)
            .then( product => {
                this.setProduct(product);
            });

        } else {

            return restful.postJson(`${config.apiEndPoint}/api/products`, this.product)
            .then( product => {
                this.setProduct(product);
            }); 

        }
        
    }
    
}

export default new ProductState();

//fetch API for ajax? widnow.fetch
// wht is stage2?

//Polyfills? for supporting browser new API