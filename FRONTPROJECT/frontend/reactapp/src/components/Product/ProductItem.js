import React from 'react'
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
//MdOutlineAddLocation
const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <div className='col-lg-3'>
      <div className="card">
        <img src={product.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title.length>20?product.title.slice(0,20)+"...":product.title}</h5>
          <p className="card-text text-justify">{product.description.length>100?product.description.slice(0,100)+ "...":product.description}</p>
          <h6 className='text-danger'>Price:{product.price}AZN</h6>
         
          <a href="#" className="btn btn-success w-100"><AiOutlineAppstoreAdd/>Add to Cart</a>
        </div>
      </div>
    </div>
  )
}

export default ProductItem