import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Home from './components/Home';
import Application from './components/Application';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Loans from './components/Loans';



 
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route path='/login' element={<Signin />} />
                <Route path='/' element={<Home />} />


                {/* Private routes  */}
                <Route element={<RequireAuth />}>     
                <Route path='application' element={<Application />} />
                <Route path='loans' element={<Loans />} />



                </Route>
            </Route>

            
        </Routes>
       
    );
}
 
export default App;