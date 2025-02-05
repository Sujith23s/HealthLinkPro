import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Register'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Booking from './components/Booking'
import ViewAppoint from './components/viewappoint'
import DoctorLogin from "./components/DoctorLogin"
import DoctorRegister from "./components/DoctorRegister"
import ViewPatientAppointments from "./components/ViewPatientAppointments"
import DoctorDash from './components/DoctorDash'
import AddPrescription from "./components/AddPrescription"
import ViewPrescriptions from "./components/ViewPrescriptions"

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/register' element={<Signup />}></Route>
         <Route path='/Dash' element={<Dashboard />}></Route>
         <Route path='/DoctorDash' element={<DoctorDash />}></Route>
         <Route path='/Booking' element={<Booking />}></Route>
         <Route path='/View' element={<ViewAppoint />}></Route>
         <Route path='/DoctorRegister' element={<DoctorRegister />}></Route>
         <Route path='/DoctorLogin' element={<DoctorLogin />}></Route>
         <Route path='/ViewPatientAppointments' element={<ViewPatientAppointments />}></Route>
         <Route path='/AddPrescription' element={<AddPrescription />}></Route>
         <Route path='/ViewPrescriptions' element={<ViewPrescriptions />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
