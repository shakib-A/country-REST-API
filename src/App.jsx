import React, { useContext, Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Form from './components/Form'
import AllCountries from './components/AllCountries'
import Country from './components/Country'
import { myContext } from './components/context/myContext'

const App = () => {

 const { darkMode } = useContext(myContext)



  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : ''}>
        <main className='bg-VeryLightGray(LightModeBackground) dark:bg-VeryDarkBlue(DarkModeBackground) dark:text-White(DarkModeText&LightModeElements) min-h-[100vh]'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Fragment> <Form /> <AllCountries /> </Fragment>}/>
            <Route path='/country' element={<Country />} />
            <Route path='/country/:countryId' element={<Country />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App