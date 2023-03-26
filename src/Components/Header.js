import React from 'react'
import { Button } from 'react-bootstrap'
import { SunIcon,MoonIcon } from '@heroicons/react/24/solid'


const Header = ({toggleMode,mode}) => { 
    return (
        <div className='d-flex justify-content-between shadow-lg p-3 mb-3 bg-body-tertiary rounded'>
            <h3>Where in the world?</h3>
            <Button 
            className='px-4'
            variant={mode!=='dark' ? 'light' : 'dark'}
            onClick={toggleMode}
            >{mode === 'dark' ? <MoonIcon style={{width:'20px', height: '20px'}}></MoonIcon> : <SunIcon style={{width:'20px', height: '20px'}}></SunIcon>}
            </Button>
        </div>
    )
}

export default Header
