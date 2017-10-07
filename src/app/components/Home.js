import React from "react";
import {Like} from "./Like";
export class Home extends React.Component {

    constructor() {
        super();//calls base class constructor.
        this.state = {
            likes: 1000
        }
    }
increament() {
    console.log("Called from likes child js.");
    this.setState(
        {
            likes:this.state.likes + 1
        }
    );
}
    render() {
        console.log("Home render called.");
        return (
        <div> 
            <h1>Home</h1>
            <Like likes={this.state.likes}
            onIncreament={()=> this.increament()}
            />
            
        </div>
        
        )
    }
}