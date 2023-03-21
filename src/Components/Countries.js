import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Country from './Country';
import Filter from './Filter';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [q, setQ] = useState("");


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
            <Filter
                countries={countries}
                setCountries={setCountries}
                q={q}
                setQ={setQ}
            />

            <div className='row'>
                {
                    countries.filter(country => {
                        return q.toLowerCase() === " " ? country : country.name.common.toLowerCase().includes(q)
                    }).map((country, index) => <Country key={index} country={country}></Country>
                    )
                }

            </div>
        </Container>

    )
}

export default Countries
