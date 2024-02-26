import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {countryCode} from '../contries'

const CountryDisplay = ({ selectedCountry }) => {

    const { flags:{svg}, name:{common}, population, region, subregion, capital, tld, currencies, languages, borders } = selectedCountry
    const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate('/')} className='self-start drop-shadow-xl bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements) px-6 py-1 rounded-sm'>go back</button>
      <div className='flex flex-col lg:flex-row self-center lg:self-auto justify-start items-start lg:items-center gap-20 max-w-96 lg:max-w-none lg:w-full'>
          <img src={svg} className='h-[300px] w-full lg:max-w-[500px]' />
          <div className='flex flex-col gap-8 flex-1'>
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-20 lg:justify-start'>
              <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xl my-4'>{common}</h1>
                <span><strong>Population:</strong> {population}</span>
                <span><strong>Region:</strong> {region}</span>
                <span><strong>Sub Region:</strong> {subregion}</span>
                <span><strong>Captial:</strong> {capital[0]}</span>
              </div>

              <div className='flex flex-col gap-2 lg:my-4'>
                <span><strong>Top Level Domain:</strong> {tld[0]}</span>
                <span><strong>Curencies:</strong> {}</span>
                <span><strong>Languages:</strong> {}</span>
              </div>
            </div>
    


            <div className='flex flex-col gap-2 lg:flex-row lg:justify-start lg:items-center'>
              <h2><strong>Border Countries:</strong></h2>
              <div className='flex gap-2 flex-wrap'>
              {borders?.map((border, index) => {
                const borderCountry = countryCode.find((country) => country.code === border)
                return <Link key={index} to={`/country/${borderCountry.name}`}><span className='px-6 py-1 bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements) rounded-sm drop-shadow-lg cursor-pointer'>{borderCountry.name}</span></Link>
            })}
              </div>
            </div>
          </div>
      </div>

    </>
  )
}

export default CountryDisplay