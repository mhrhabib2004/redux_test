
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navber'

function App() {


  return (
  <div>
     <Navbar></Navbar>
     <Outlet />
  </div>
  )
}

export default App
