import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Country = ({ country,mode }) => {
 
  return ( 
    <Card className={`col-4 mx-auto my-4 p-0 shadow-lg ${mode === 'dark' ? '' : 'bg-dark text-light'}`} 
    style={{ width: '18rem', height: '18rem' }}>
      <Link to={`/countries/${country.name.common}`} 
      className={`text-decoration-none ${mode === 'dark' ? 'text-dark' : 'text-light'}`}>
        <img src={country.flags.png} className="w-100" style={{height: '40%'}} alt={country.name.common} />
        <Card.Body>
          <Card.Title>{country.name.common}</Card.Title>
          <Card.Text>
            <b>Population:</b> {country.population} <br />
            <b>Region:</b> {country.region} <br />
            <b>Capital:</b> {country.capital} <br />
          </Card.Text>
        </Card.Body>
      </Link>

    </Card>
  )
}

export default Country
