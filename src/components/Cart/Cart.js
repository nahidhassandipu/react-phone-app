import React, { Component } from 'react'
import Title from "../Title";
import { ProductConsummer } from '../../context';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList'
import CartTotals from "./CartTotals";


export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <Title name="Your" title="Cart" />
        
        <ProductConsummer>
          
          {data => {
            const {cart} = data

            return (
              <React.Fragment>
                {cart.length > 0 && 
                  <React.Fragment>
                    <CartColumns />
                    <CartList value={data}/>
                    <CartTotals value={data}/>
                  </React.Fragment>  
                }
                {cart.length < 1 && <EmptyCart />}
              </React.Fragment>
            )
            
          }}

        </ProductConsummer>  
      </React.Fragment>
    )
  }
}
