import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import AllCountries from './components/AllCountries'
import { myContext } from './components/context/myContext'

const App = () => {


 const { darkMode } = useContext(myContext)

  return (
  <div className={darkMode ? 'dark' : ''}>
    <main className='bg-VeryLightGray(LightModeBackground) dark:bg-VeryDarkBlue(DarkModeBackground) dark:text-White(DarkModeText&LightModeElements) min-h-[100vh]'>
      <NavBar />
      <Form />
      <AllCountries />
    </main>
  </div>
  )
}

export default App