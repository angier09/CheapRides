import React from 'react';
import './App.css'

// import components into App component
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home'
import Services from "./Components/Services/Services";
import Reviews from "./Components/Reviews/Reviews";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return(
        <div>
            <Navbar/>
            <Home/>
            <Services/>
            <Reviews/>
            <About/>
            <Footer/>
        </div>
    )
}

export default App