import {observable, action, computed} from "mobx"; // o is small because it is a function in javascript
import generate from "./mock-data";

class CartState {
    
    constructor () {
        
        //this.loadItems();
        
    }
    
    @observable items = [];
    
    loadItems() {
        this.items = generate();
        console.log(this.items);
    }
    
    //derived data or computed proprty
    @computed
    get cartSize () {
        
        console.log("cart size called");
        return this.items.length;
        
    }

    // internal performace improvement
    @computed
    get amount () {
        
        let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].price;
        }

        return sum;
    }
        
    @action
    removeItem(id) {
        this.items = this.items.filter ( item => item.id != id);
    }

    @action empty() {
        this.items = []
    }
    
    @action updateItem(id, qty) {
         for (let item of this.items) {
             if (item.id == id) {
                 item.quantity = parseInt(qty);
                 break;
             }
         }
    }

    
    @action addItem(product) {
        this.items.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        })
    }
    
}

export default new CartState();
// create singelton if path correct
//not default file name should be same as import one
// Diff export class & export object?