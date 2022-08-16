import React from 'react'
import Herocomp from '../../components/Hero-comp/Herocomp'
import './index.css'

const index = () => {
  return (
    <div>
         <section id='hero-section'>
        <div className="">
          <div className="row hero__section__row">
            <div className="col-lg-6">
    <Herocomp/>
            </div>
            <div className="col-lg-12">
              <img className='hero__section__image' src="https://cdn.shopify.com/s/files/1/0566/4538/6449/files/book_hands_1950x.png?v=1650898383" alt='shopify.jpg'/>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default index