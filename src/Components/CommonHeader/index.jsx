import React from 'react'
import logo from '../../assets/Logo.png';
import './style.css'

const CommonHeader = () => {
    return (
        <div className="common-header-container" >
            <div className='container-logo'>
                <img src={logo} alt="logo" className='container-logo-image' />
            </div>
            <div className='heading-container'>
                <div className='heading-name'>alkye</div>
                <div className='heading-text'>The easiest test you will ever do</div>
            </div>
        </div>
    )
}

export default CommonHeader;