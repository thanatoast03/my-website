import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';  // Import the Tailwind CSS file
import LandingPage from "./landing.jsx";

function App() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />}/>
            </Routes>
        </Router>
    )
}

export default App;