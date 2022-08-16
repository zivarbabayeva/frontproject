import React from 'react'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import Search from './Search/Search'

const Header = () => {
  return (
<header className='bg-light py-3' >
    <div className='container'>
        <div className='row align-items-center justify-content-between'>
            <div className='col-lg-2'>
                <Logo/>
            </div>
            <div className='col-lg-3'>
                <Search/>
            </div>
           
            <div className='col-lg-7 text-end'>
            <Navigation/>

            </div>
        </div>
    </div>
</header>
  )
}

export default Header