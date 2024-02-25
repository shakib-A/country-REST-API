import React, { createContext, useState, useEffect, useRef } from 'react'
export const myContext = createContext(null)

const MyContextProvider = ({ children }) => {

    const getData = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()
        setCountryData(data)
        console.log(data)
    }
    
    useEffect(() => {
        getData()
    },[])
    

    const [darkMode, setDarkMode] = useState(false)
    const [countryData, setCountryData] = useState()
    const [query, setQuery] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('')
  return (
    <myContext.Provider value={{ darkMode, setDarkMode, query, setQuery, selectedFilter, setSelectedFilter, countryData  }}>
        {children}
    </myContext.Provider>
  )
}

export default MyContextProvider