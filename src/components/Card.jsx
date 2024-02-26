import React from 'react'

const Card = ({ imgAddress, name, capital, population, region }) => {
  return (
    <div className='flex flex-col w-full bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements) rounded-md drop-shadow-md cursor-pointer'>
      <img src={imgAddress} className='h-[220px] object-cover rounded-t-md' />
      <h2 className='font-bold text-lg my-2'>{name}</h2>
      <span>Population: {population}</span>
      <span>Region: {region}</span>
      <span>Capital: {capital}</span>
    </div>
  )
}

export default Card