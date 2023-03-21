import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const res = await fetch("https://restcountries.com/v3.1/all")
            const data = await res.json();
            setCountries(data);
        }
        fetchCountries();
    }, [])
    return (
        <Container fluid>
            <div className='row'>
                {
                    countries.map((country, index) => <Country country={country}></Country>
                    )
                }

            </div>
        </Container>

    )
}

export default Countries
