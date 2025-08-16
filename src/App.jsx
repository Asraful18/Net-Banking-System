import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './pages/Home';
import Savings from './pages/Savings';
import Business from './pages/Business';
import Fixed from './pages/Fixed';
import Savingspage from './pages/Savingspage';
import Businesspage from './pages/Businesspage';
import Fixedpage from './pages/Fixedpage';
import Personelloan from './pages/Personelloan';
import Homeloan from './pages/Homeloan';
import Carloan from './pages/Carloan';
import Car_loan from './pages/Car_loan';
import Home_loan from './pages/Home_loan';
import Personal_loan from './pages/Personel_loan';
import Cardpage from './pages/Cardpage';
import Profile from './pages/Profile';
import Productcard from './components/Productcard';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';

const App = () => {
  return<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/savings' element={<Savings/>}></Route>
      <Route path='/business' element={<Business/>}></Route>
      <Route path='/fixed' element={<Fixed/>}></Route>
      <Route path='/savingspage' element={<Savingspage/>}></Route>
      <Route path='/businesspage' element={<Businesspage/>}></Route>
      <Route path='/fixedpage' element={<Fixedpage/>}></Route>
      <Route path='/personelloan' element={<Personelloan/>}></Route>
      <Route path='/homeloan' element={<Homeloan/>}></Route>
      <Route path='/carloan' element={<Carloan/>}></Route>
      <Route path='/car_loan' element={<Car_loan/>}></Route>
      <Route path='/home_loan' element={<Home_loan/>}></Route>
      <Route path='/personal_loan' element={<Personal_loan/>}></Route>
      <Route path='/cardpage' element={<Cardpage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/team' element={<Team/>}></Route>


    </Routes>
  </BrowserRouter>
  </>
}
export default App
