import React, { Component } from 'react'
import { ProductConsummer } from "../context";
import { Link } from "react-router-dom";
import Title from "./Title";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <Title name="Product's" title="Details" />

        <ProductConsummer>
          {(data) => {
            const { id, title, img, price, company, info, inCart, count, total } = data.detailProduct

            return (
              <div className="container-fluid mt-5 mb-5">
                <div className="row">
                  <div className='col-xs-12 col-sm-6'>
                    <img src={img} className="img-fluid" alt={title} />
                  </div>
                  <div className='col-xs-12 col-sm-6'>
                    <div className='text-left'>
                      <h3><b>Name: </b>{title}</h3>
                      <p><b>Made by: </b>{company}</p>
                      <p><b>Description: </b>{info}</p>
                      <br/>
                      <h5><strong><b>Price: </b></strong><span>$</span>{price}</h5>
                      <h5><strong><b>Count: </b></strong><span>$</span>{count}</h5>
                      <h5><strong><b>Total: </b></strong><span>$</span>{total}</h5>
                      <div className="btn-group col-xs-12 col-sm-6 p-0 mt-4 mb-4" role="group" aria-label="Basic example">
                        <Link to='/'>
                          <button className='btn btn-outline-secondary'>Back to products</button>
                        </Link>
                        <button 
                          className="btn btn-outline-success"
                          disabled={inCart ? true : false}
                          onClick={() => data.addCartHandle(id)} >
                          <div>{inCart ? 'In cart' : 'Add to cart'}</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            )
            

          }}
        </ProductConsummer>

      </React.Fragment>
    )
  }
}
