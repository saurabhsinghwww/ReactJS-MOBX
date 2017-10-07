import React from "react";
import PropTypes from "prop-types";

export class Like extends React.Component {

    constructor(props, context) {
        super(props);//calls base class constructor.
        console.log("Like object created.");
        console.log("Like context created.", context);
    }
    //Called many times based on parent render method
    componentWillReceiveProps(nextProps) {
        console.log("current props:", this.props);
        console.log("next props:", nextProps);
    }
    

    //This method returns true/ false and responsible for calling the render method.
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should update ", nextProps);
        return true;//calls render
    }

    render() {
        console.log("Like render called");
        return (
        <div> 
            <h1>Likes -> {this.props.likes}</h1>
            <button onClick={()=>this.props.onIncreament()}>
                +1
            </button>
            
        </div>
        
    )
    }
}

Like.contextTypes = {

 appTitle: PropTypes.string

}


//event pool
//add to queue in case of adding evemt Quueue [clickEvenet, hoverEvent] (diff not called)
// Evemt queue empty then diff algo for patching
// State management problem that why Flux react team introduce
// Flux architechture (not implementation) implmentation lib like MObXjs
// React Router 4.0
// SEO (search engine optimasation)
// not good sates
// JSX -> inside render method
//ES6 script does not support decorater, typescript support
//babel add support for decorater and convert to ES5 code


// MOBX ( like REDUX)
// this is based on flux arch.
// can use with angular not react based
// MOBX-> not database for statemangement
// "presets": ["es2015", "react", "stage-2"], statge2 for observale
// "plugins": ["transform-decorators-legacy"] babel has problem for class level decorater for solving that
// react virtualized provide custom components like grid based on react support
//calss lifecycle, props, states else functioncal component
// facebook team written flux arch
//Parent render call child render automatically
//PureComponent implemented shouldCOmponentMethod (cannot averide), compare old state and new state by swallow comparision (compare ref in case of object, use imutable object)  if change then only call render
// if object comparision use normal component
// If use ref then it is uncontrolled component

//Jest for testing, good in case of states and props

//jest is test runner, karna there is lot of configuration and jest no configuration
//jasmine keywords like describe it alreay supported by jest
//enzyme for testing react components, react-test-renderer used internally by enzyme for rendering
//babel-jest if your  r bulding in ES6, convert RC file to ES6
// in karma every describe is a test suit but in jest every file is one test suite cam have many describe


//Topics to lern
//Javascript event Queue
// Java script queue for timer and event
//default class
// passing value from child to Parent
// Raect ref -> access real dom
// Loading module on requirement in angular and react JS
//-- save npm
//Reactive programming? based on observable pattern
//rect viruallized
 // peer dependencies
 // get and not use get?
 // useStrick in javascript?
// reactive vs imperative programming
//immutable.js lib?
// firepad? (http://code.nodesen.se)
//karma? is test runner
//jasminse?












