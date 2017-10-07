import {  mount } from 'enzyme' // create render dom using real DOM
import React from "react"
import sinon from 'sinon'
import ProductList from "./ProductList";

import productState from "../ProductState";

import restful from "../../core/Restful";

productState.setProduct({
    
    name: 'Mobile1',
    year: '2017'
    
});

describe('Button component', () => {
    it('should call handleClick() when clicked', () => {
      const spy = sinon.spy()
      Button.prototype.handleClick = spy
      const wrapper = mount(<Button />)
      wrapper.find('div').simulate('click')      
      expect(spy.calledOnce).to.equal(true)
    })
  })