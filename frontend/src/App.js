import React, { useState, useEffect } from 'react'
import Home from './screens/home'
import Menu from './components/menu'

const App = () => {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ token, setToken ] = useState('')
  const [ encryptString, setEncryptString ] = useState('')
  const [ decryptString, setDecryptString ] = useState('')
  const [steps] = useState(6)
  const [resume,setResume] = useState('')

  return (
    <div>
      <Menu />
      <Home />
    </div>
  )
}

export default App
