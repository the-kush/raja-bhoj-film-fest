import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LearnMore from "./page/LearnMore.jsx";
import Home from './page/Home.jsx';
// import Registration from "./components/Registration.jsx";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn-more" element={<LearnMore />} />
            </Routes>
        </Router>
    )
}
export default App
