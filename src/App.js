import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Profile from './components/Profile';  // Example component for the "Profile" page
import Gallery from './components/Gallery';  // Example component for the "Gallery" page
import Booking from './components/Booking';  // Example component for the "Booking" page
import "./App.css"; // Import the CSS file
function App() {
  return (
    <Router>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center w-full">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  
  );
}

export default App;
