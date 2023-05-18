import React, { useEffect } from 'react'
import AppRouter from './router'
import './choices.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useEffect(() => {
    document.getElementById('theme-opt').href = './css/style.min.css'
  }, [])

  return (<>
  <AppRouter />
  <ToastContainer/>
  </>
  )
}

export default App
