import React from 'react'

const Card = ({id, url, title, image}) => {
  return (
    <div className='col-md-3'>
        <div className="card">
            <img src="http://localhost:5000/images/7bf118b094828d8a0fe68c92c22fc66f.png" className='card-img-top' alt="Card Image" />
            <div className="card-body">
                <h5 className="card-title">Product 5</h5>
            </div>
            
            <div className="d-flex flex-row">
                <a href="/hello" className="box w-50 bg-transparent border border-bottom-0 d-inline-flex align-items-center justify-content-center text-uppercase fw-semibold py-1 text-secondary" style={{"cursor" : "pointer"}}>
                    Hello
                </a>
                <a href="/hello" className="box w-50 bg-transparent border border-bottom-0 d-inline-flex align-items-center justify-content-center text-uppercase fw-semibold py-1 text-secondary" style={{"cursor" : "pointer"}}>
                    World
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card