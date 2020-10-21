import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Quote />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
