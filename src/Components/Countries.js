import React, { useEffect, useState } from 'react'

const Countries = () => {
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        const fetchCountries = async () => {
            const res = await fetch("https://restcountries.com/v3.1/all")
            const data = await res.json();
            setCountries(data);
        }
        fetchCountries();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Countries
