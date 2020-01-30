import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsummer } from "../context";

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.produtcs
    return (
      <ProductConsummer>
        {value => (
          <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-4'>
            <div className="p-5 img-thumbnail img-thumbnail-container">
              <img 
                onClick={() => value.openModal(id)} 
                src={img} 
                className="img-fluid" 
                alt={title} />
              <h4 
                onClick={() => value.openModal(id)} 
                className="text-success mt-2 mb-2" >${price}</h4>
              <h6 onClick={() => value.openModal(id)}>{title}</h6>
                <Link to="/details" 
                  className='view-details-container' 
                  onClick={() => value.detailHandle(id)}>
                  <div onClick={() => value.closeModal()}>
                    <p><span className='fa fa-eye'></span></p>
                    <p>View details</p>
                  </div>
                </Link>
              <button 
                className='shopping-cart-container'
                onClick={() => value.addCartHandle(id)}
                disabled={inCart ? true : false}>
                <div>  
                  {inCart ? (
                    <span className='fa fa-check-circle'></span> 
                    ) : (
                        <span className='fa fa-shopping-cart'></span>
                      )
                  }
                </div>
                <div>{inCart ? 'In cart' : 'Add to cart'}</div>
              </button>
            </div>
          </div>
        )}
      </ProductConsummer>
    )
  }
}


Product.propTypes = {
  produtcs: PropTypes.shape({
    id: PropTypes.number, 
    title: PropTypes.string, 
    img: PropTypes.string, 
    price: PropTypes.number, 
    company: PropTypes.string, 
    info: PropTypes.string, 
    inCart: PropTypes.bool, 
    count: PropTypes.number, 
    total: PropTypes.number
  }).isRequired
}