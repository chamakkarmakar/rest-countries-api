import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Country = ({ country }) => {
  return ( 
    <Card className='col-4 m-4 p-0' style={{ width: '18rem', height: '18rem' }}>
      <Link to={`/countries/${country.name.common}`} className='text-dark text-decoration-none'>
        <img src={country.flags.png} className="w-100 h-50" alt={country.name.common} />
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
