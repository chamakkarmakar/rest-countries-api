import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

const CountryInfo = () => {
    const [country, setCountry] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${name}`
            )
            const country = await response.json()
            console.log(country);
            setCountry(country)
        }

        fetchCountryData()
    }, [name])
    return (

        <div className=''>
            <Link to="/" className='text-dark text-decoration-none shadow p-3 mb-5 bg-body-tertiary rounded'>Back</Link>
            <div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded card mb-3" style={{ maxWidth: "540px" }}>
            {
                country.map((count, index) =>
                    <div key={index} className="row g-0">
                        <div className="col-md-4">
                            <img src={count.flags.png} className="img-fluid rounded-start" alt={name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p>
                                    <b>Population:</b> {count.population} <br />
                                    <b>Region:</b> {count.region} <br />
                                    <b>Subregion:</b> {count.subregion} <br />
                                    <b>Capital:</b> {count.capital} <br />
                                </p>
                               
                            </div>
                        </div>
                        
                    </div>
                )
            }

        </div>
        </div>

    )
}

export default CountryInfo
