import React from 'react'

export default function CartItem({item, value}) {
    const {id, img, title, price, count, total} = item;
    const { removeItems, incrementItems, decrementItems } = value;

  return (
    <div id='cart-item' className='container-fluid text-center pb-2 pt-2'>
        <div className='row align-items-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img 
                    src={img} 
                    alt={title} 
                    style={{width: '70px', height: 'auto'}} />
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <p className="text-uppercase">{title}</p>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <p className="text-uppercase">${price}</p>
            </div>
            <div className='col-10 mx-auto col-lg-2'>

                <div className="input-group justify-content-center">
                    <div className="input-group-prepend">
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button"
                            onClick={() => decrementItems(id)} >
                            <span 
                                className='fa fa-minus' 
                                style={{fontSize: '14px'}}/>
                        </button>
                    </div>
                    <input 
                        type="text" 
                        className="form-control text-center" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"
                        style={{maxWidth: '60px'}}
                        value={count}/>
                    <div className="input-group-append">
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button"
                            onClick={() => incrementItems(id)} >
                            <span 
                                className='fa fa-plus' 
                                style={{fontSize: '14px'}}/>
                        </button>
                    </div>
                </div>

            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span 
                    className='fa fa-trash text-danger' 
                    style={{fontSize: '22px', cursor:'pointer'}}
                    onClick={() => removeItems(id)} />
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <p className="text-uppercase">${total}</p>
            </div>
        </div>
    </div>
  )
}
