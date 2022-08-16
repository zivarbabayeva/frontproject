import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ProductItem from './ProductItem';
import './ProductList.css'

const ProductList = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
const getItems=async()=>{
    const res= await axios.get('https://www.googleapis.com/auth/books');
     setItems(res.data)
}
getItems()
    },[])
  return (
    <div className='container'>
         <div className='product_header'>
<h3>Select your Subscription box</h3>
    </div> 
        <h3 className='text-center my-4'></h3>
       <div className='row '>
       {
        items && items.map((item,i)=>{
            return(
                <ProductItem product={items[i]}/>
            )
        })
        }
       </div>
    </div>
    
  )
}

export default ProductList