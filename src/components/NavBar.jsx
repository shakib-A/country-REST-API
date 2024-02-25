import React, { useContext } from 'react'
import { myContext } from './context/myContext'

const NavBar = () => {

  const { setDarkMode, darkMode } = useContext(myContext)

  return (
    <div className='flex justify-between p-4 md:px-20 drop-shadow-md bg-White(DarkModeText&LightModeElements) dark:bg-DarkBlue(DarkModeElements)'>
        <h1>Where in the world?</h1>
        <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}

export default NavBar