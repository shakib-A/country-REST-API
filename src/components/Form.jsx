import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col justify-start p-4 md:flex-row gap-5 md:justify-between  md:px-20'>
        <label className='bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements) drop-shadow-md px-8 py-2 rounded-md'>
            <input type="text" placeholder='Search for a country...' className='w-full bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements) outline-none' />
        </label>
        <select className='bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements) drop-shadow-md px-8 py-2 rounded-md appearance-none'>
            <option value="">Filter by Region</option>
            <option value="">Africa</option>
            <option value="">America</option>
            <option value="">Asia</option>
            <option value="">Europe</option>
            <option value="">Oceana</option>
        </select>
    </div> 
  )
}

export default Form 