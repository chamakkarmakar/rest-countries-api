import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'

const Filter = ({ setCountries, q, setQ }) => {
    const regions = [
        {
            name: "Filter by region",
            desc: "All",
        },
        {
            name: "Africa",
            desc: "Africa",
        },
        {
            name: "Americas",
            desc: "Americas",
        },
        {
            name: "Asia",
            desc: "Asia",
        },
        {
            name: "Europe",
            desc: "Europe",
        },
        {
            name: "Oceania",
            desc: "Oceania",
        },
    ]

    const handleFilter = async (region) => {
        if (region === undefined || region === "All") {
            const res = await fetch("https://restcountries.com/v3.1/all")
            const data = await res.json();
            setCountries(data);
        }
        else if (region !== undefined) {
            const url = `https://restcountries.com/v3.1/region/${region}`
            const res = await fetch(url)
            const data = await res.json()
            setCountries(data)
        }
        console.log(region);
    }
    useEffect(() => {
        handleFilter();
        // eslint-disable-next-line
    }, [])
    return (
        <div className='mx-5 d-flex justify-content-between'>
            <Form>
                <Form.Control
                    className='w-auto shadow bg-body-tertiary rounded'
                    type="search"
                    name="search"
                    autoComplete='off'
                    placeholder='search country'
                    value={q}
                    onChange={e => setQ(e.target.value)}
                />
            </Form>
            <div>
                <Form.Select
                    className='w-full shadow bg-body-tertiary rounded'
                    value={regions.desc}
                    onChange={e => handleFilter(e.target.value)}
                >
                    {
                        regions.map((region, index) => <option key={index} value={region.desc}>{region.name}</option>)
                    }
                </Form.Select>
            </div>
        </div>
    )
}

export default Filter
