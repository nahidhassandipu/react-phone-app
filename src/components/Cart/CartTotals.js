import React from 'react'
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton'

export default function CartTotals({value, history}) {
  const { cartTotal, cartSubtotal, cartTax, clearCart } = value;
  
  return (
    <div className='container'>
        <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to='/'>
                    <button 
                        type="button"
                        onClick={() => clearCart()} 
                        className="btn btn-lg btn-danger text-uppercase mt-4 mb-4">
                        Clear cart
                    </button>
                </Link>
                <br/>
                <h3>Subtotal : 
                    <span className='text-muted'> $</span>
                    <strong className='text-muted'>{cartSubtotal}</strong>
                </h3>
                <br/>
                <h3>Tax : 
                    <span className='text-muted'> $</span>
                    <strong className='text-muted'>{cartTax}</strong>
                </h3>
                <br />
                <h3>Total : 
                    <span className='text-muted'> $</span>
                    <strong className='text-muted'>{cartTotal}</strong>
                </h3> 
                <br/>
                <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                <br/><br/>
            </div>
        </div>
    </div>
  )
}
