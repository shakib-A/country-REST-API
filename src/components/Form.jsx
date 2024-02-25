import React, { useContext, useRef } from 'react'
import { myContext } from './context/myContext'

const Form = () => {

  const { query, setQuery, setSelectedFilter} = useContext(myContext)

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  const getOption = (e) => {
      const value = e.target.value
      setSelectedFilter(value)
  }


  return (
    <div className='flex flex-col justify-start p-4 md:flex-row gap-5 md:justify-between  md:px-20'>
        <label className='bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements) drop-shadow-md px-8 py-2 rounded-md'>
            <input type="text" value={query} onChange={e => onChange(e)} placeholder='Search for a country...' className='w-full bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements) outline-none' />
        </label>
        <select onChange={e => getOption(e)} className='bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements) drop-shadow-md px-8 py-2 rounded-md appearance-none'>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceana">Oceana</option>
        </select>
    </div> 
  )
}

export default Form 