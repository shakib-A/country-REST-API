import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'

const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  return (
  <div className={darkMode ? 'dark' : ''}>
    <main className='bg-VeryLightGray(LightModeBackground) dark:bg-VeryDarkBlue(DarkModeBackground) dark:text-White(DarkModeText&LightModeElements) min-h-[100vh]'>
      <NavBar
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        />
        <Form />
    </main>
  </div>
  )
}

export default App