import React from "react";
import './App.css'

// import components into App component
import Home from './Components/Home/Home'
import Navbar from "./Components/Navbar/Navbar";
import Reviews from "./Components/Reviews/Reviews";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return(
        <div class="title">
            <Navbar/>
            <Home/>
            <Ride/>
            <Services/>
            <Reviews/>
            <About/>
            <Footer/>
        </div>
    )
}

export default App