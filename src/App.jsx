import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './config/config.js'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth.js"
import {login,logout} from "./store/authSlice.js"
import { Header,Footer } from './components/index.js'
import { Outlet } from "react-router-dom";

function App() {
  
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userId : userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
 
 

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
      <Header/>
      TODO : <Outlet/>
      <Footer/>
      </div>
    </div>
  ) : null
}

export default App
