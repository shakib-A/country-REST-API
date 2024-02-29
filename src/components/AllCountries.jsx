import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { myContext } from './context/myContext'
const AllCountries = () => {

  const { countryData, query, selectedFilter } = useContext(myContext)

  const filteredData = countryData?.filter(country => {
    if(country.name.common.toLowerCase().includes(query.toLowerCase()) && 
        country.region.toLowerCase().includes(selectedFilter.toLowerCase())) {
      return country
    } else return
  })

  return (
    <div className='p-4 md:px-20 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {filteredData?.map((country, index) => {
          return <Link key={index} to={`/country/${country.name.common}`}>
          <Card 
            imgAddress={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
          </Link>
        })}
    </div>
  )
}

export default AllCountries
