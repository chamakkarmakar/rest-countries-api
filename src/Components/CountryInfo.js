import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'

const CountryInfo = () => {
    const [country, setCountry] = useState([])
    const { name } = useParams()

    useEffect(() => {
        document.title = `Country | ${name}`
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

        <div className='container'>
            <Link to="/" className='ms-5 mb-5 text-dark text-decoration-none shadow p-3 bg-body-tertiary rounded'>
                <ArrowSmallLeftIcon style={{width:'20px', height: '20px'}}></ArrowSmallLeftIcon>
                Back
            </Link>
            <div className="mx-auto my-5 shadow-lg p-3 bg-body-tertiary rounded card w-75">
                {
                    country.map((count, index) =>
                        <div key={index} className="row g-0">
                            <div className="col-md-6">
                                <img src={count.flags.png} style={{width: '100%', height: '100%'}} className="img-fluid rounded-start" alt={name} />
                            </div>
                            <div className="col-md-6 px-3 py-5">
                                <div className="card-body">
                                    <h3 className="card-title">{name}</h3>
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
