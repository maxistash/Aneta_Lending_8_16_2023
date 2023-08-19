// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';

// function App() {
//   return (
//    <Header></Header>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Signin from './components/Signin';
import HomePage from './components/HomePage';
import Home from './components/Home';
import Application from './components/Application';



 
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Signin />} />
                <Route path='/footer' element={<Footer />} />
                <Route path='/index' element={<Home />} />
                <Route path='/h' element={<HomePage />} />
                <Route path='/application' element={<Application />} />
                

                
            </Routes>
            <Footer/>
        </Router>
    );
}
 
export default App;