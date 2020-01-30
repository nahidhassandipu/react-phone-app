import React, { Component } from 'react'
import { ProductConsummer } from '../context'
import { Link } from 'react-router-dom'

export default class Modal extends Component {
  render() {
      return (

        <ProductConsummer>
            {data => {
                const {id, title, img, price, inCart, company} = data.modalProduct;

                return (
                    !data.modalDismiss &&
                    <div id='product-modal'>
                        <div onClick={() => data.closeModal()} id="close">
                            <span className="fa fa-times-circle"></span>
                        </div>
                        <img src={img} alt={title} /><br/>
                        <h3>{title}</h3>
                        <h5 className='text-success'>$<b>{price}</b></h5>
                        <span className='text-muted'>Made by: <strong>{company}</strong></span>
                        <br/>

                        <div className="btn-group mt-3" role="group" aria-label="Basic example">
                            <Link 
                                to='/' 
                                type="button" 
                                className="btn btn-outline-info">
                                <div onClick={() => data.closeModal()}>Continue shopping</div>
                            </Link>
                            <Link 
                                to="/details"
                                type="button" 
                                className="btn btn-outline-secondary"
                                onClick={() => data.detailHandle(id)}>
                                <div onClick={() => data.closeModal()}>View details</div>
                            </Link>
                            <button 
                                type="button" 
                                className="btn btn-outline-success" 
                                disabled={inCart ? true : false}
                                onClick={() => data.addCartHandle(id)} >
                                <div>{inCart ? 'In cart' : 'Add to cart'}</div>
                            </button>
                        </div>
                    </div>
                )
            }}
        </ProductConsummer>
      )
  }
}
