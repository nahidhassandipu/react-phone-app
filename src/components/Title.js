import React from 'react'

export default function Title({name, title}) {
  return (
    <React.Fragment>
        <div className="page-title">
            <img src="./img/title-wing.png" alt=""/>
            <h3 className="text-capitalize display-4">
                <span className='text-warning'>{name} </span>
                <strong className='text-info'>{title}</strong>
            </h3>
            <img src="./img/title-wing.png" alt=""/>
        </div>
    </React.Fragment>
  )
}
