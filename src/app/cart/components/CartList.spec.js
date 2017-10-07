import {  mount } from 'enzyme' // create render dom using real DOM
import React from "react"

import CartList from "./CartList";

import cartState from "../CartState";
cartState.addItem({id: 1, name: 'product 1'});

describe ("Test cart component ", () => {

    it("Test cart component ", () => {
        const wrapper = mount(<CartList cart={cartState} />)

        console.log(wrapper.html());
        expect(wrapper.html()).toContain("product 1");

            //console.log(wrapper.find(CartList).length)
       expect(wrapper.find("tr").length).toBe(2)
        expect(wrapper.find("tr").at(1).text()).toContain("product 1")
    })
})