import React from 'react'
import './Product'
const Product = () => {
  return (
    <div className='card_content d-flex my-4'>
      <div className="card col-lg-3" >
        <a href='About'> <img src={process.env.PUBLIC_URL + "assets/image/book1.jpg"} className="d-block w-100" alt="..." /></a>
       
        <div className="card-body">
          <h5 className="card-title fw-bolder">Winer Drawings</h5>
          <p className="card-text text-justify">SLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
          <a href="#" className="btn btn-success w-100">Add to Cart</a>
        </div>
      </div>
      <div className="card col-lg-3" >
        <a href='About'><img src={process.env.PUBLIC_URL + "assets/image/book2.jpg"} className="d-block w-100" alt="..." /></a>
        
        <div className="card-body">
          <h5 className="card-title fw-bolder">Georgeous Dresses</h5>
          <p className="card-text text-justify">SLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
          <a href="#" className="btn  btn-success w-100">Add to Cart</a>
        </div>
      </div>
      <div className="card col-lg-3" >
        <a href='About'> <img src={process.env.PUBLIC_URL + "assets/image/book9.jpg"} className="d-block w-100" alt="..." /></a>
       
        <div className="card-body">
          <h5 className="card-title fw-bolder">Ten Thousand Skies Above You</h5>
          <p className="card-text text-justify">SLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
          <a href="#" className="btn btn-success w-100">Add to Cart</a>
        </div>
      </div>
      <div className="card col-lg-3" >
        <a href='About'> <img src={process.env.PUBLIC_URL + "assets/image/book4.jpg"} className="d-block w-100" alt="..." /></a>
       
        <div className="card-body">
          <h5 className="card-title fw-bolder">The Trials Of Apollo</h5>
          <p className="card-text text-justify">SLorem ipsum dolor sit amet, cofhdhg ffftttttt y,jhjt ut laore  hht vfffet dolore magna aliquam erat volutpat</p>
          <a href="#" className="btn btn-success w-100">Add to Cart</a>
        </div>
      </div>
    </div> 


  )
}

export default Product