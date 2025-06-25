// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Blogs from './Components/Blogs';
import BlogDetail from './Components/BlogDetail'; // Import BlogDetail component
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content-container"> {/* Add a container for the main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} /> {/* Dynamic route for blog details */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
