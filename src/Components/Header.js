import React from 'react'
import { Button } from 'react-bootstrap'

const Header = () => {
    return (
        <div className='d-flex justify-content-between shadow-lg p-3 mb-3 bg-body-tertiary rounded'>
            <h3>Where in the world?</h3>
            <Button variant="dark">Dark</Button>
        </div>
    )
}

export default Header
