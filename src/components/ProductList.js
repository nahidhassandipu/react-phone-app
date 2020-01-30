import React, { Component } from 'react'
import Product from "./Product";
import Title from "./Title";
import { ProductConsummer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        
        <Title name="Our" title="Products" />
        
        <div className='container'>
          <div className="row">

            <ProductConsummer>
              {data => {
                return data.produtcs.map(item => {
                  return <Product key={item.id} produtcs={item} />
                })
              }}
            </ProductConsummer>
          </div>
        </div>
        
      </React.Fragment>  
    )
  }
}
