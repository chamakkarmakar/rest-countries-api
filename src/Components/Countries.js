import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import Country from './Country';
import Filter from './Filter';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [q, setQ] = useState("");
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        const fetchCountries = async () => {
            const res = await fetch("https://restcountries.com/v3.1/all")
            const data = await res.json();
            setCountries(data);
            setIsLoad(true);
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
                setIsLoad={setIsLoad}
            />
            {
                !isLoad ?
                    <div className="position-relative">
                        <Spinner className="mt-5 position-absolute start-50" animation="grow" />
                    </div>
                    :
                    <div className='row'>
                        {
                            countries.filter(country => {
                                return q.toLowerCase() === " " ? country : country.name.common.toLowerCase().includes(q)
                            }).map((country, index) => <Country key={index} country={country}></Country>
                            )
                        }

                    </div>
            }


        </Container>

    )
}

export default Countries
