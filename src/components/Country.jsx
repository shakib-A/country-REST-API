import React, { useContext } from 'react'
import CountryDisplay from './CountryDisplay'
import { useParams } from 'react-router-dom'
import { myContext } from './context/myContext'

const Country = () => {

  const { countryData } = useContext(myContext)
  const { countryId } = useParams()

  const selectedCountry = countryData.find((country) => {
    return country.name.common.toLowerCase() === countryId.toLowerCase()
  })


  return (
    <div className='p-4 xl:px-20 flex flex-col justify-center items-center gap-4'>
      <CountryDisplay selectedCountry={selectedCountry} />
    </div>
  )
}

export default Country