import React, { useState, useEffect } from 'react'

import Home from './screens/home'
import Menu from './components/menu'
import Preloader from './components/preloader'
import api from './utils/api'

const App = () => {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ isDecifrado, setIsDecifrado ] = useState(false)
  const [ token, setToken ] = useState('')
  const [ cifrado, setCifrado ] = useState('')
  const [ decifrado, setDecifrado ] = useState('')
  const [steps] = useState(6)
  const [resume,setResume] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const {data} = await api.get('/ciphers')

      const { cifrado, token } = data
      
      setCifrado(cifrado)
      setToken(token)
    
      setIsLoading(false)

    }catch(error) {
      setIsLoading(false)
      //TODO Dialog error
      console.log("error", error)
    }
  }

  const decifrar = async () => {
    try {
      setIsLoading(true)

      const { data } = await api.post('/ciphers', {
        string: cifrado,
        steps
      })

      setDecifrado(data.decifrado)
      setResume(data.resumo_criptografico)
      setIsLoading(false)
      setIsDecifrado(true)
      
    } catch (error) {
      setIsLoading(false)
      //TODO Dialog error
      console.log('error',error)
    }
  }

  return (
    <div>
      { isLoading && <Preloader />}
      <Menu />
      <Home 
        token={token}
        cifrado={cifrado}
        decifrado={decifrado}
        steps={steps}
        resume={resume}
        isDecifrado={isDecifrado}

        //functions
        setDecifrado={setDecifrado}
        setResume={setResume}
        decifrar={decifrar}

      />
    </div>
  )
}

export default App
