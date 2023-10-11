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

// import Home from './pages';
// import About from './pages/about';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
// import Contact from './pages/contact';
 
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Signin />} />
                <Route path='/footer' element={<Footer />} />
                {/* <Route path='/contact' element={<Contact />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} /> */}
            </Routes>
            <Footer/>
        </Router>
    );
}
 
export default App;