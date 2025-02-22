import React from "react";
import  { useState, useEffect } from 'react';
import Loader from './pages/Loader';
import Navbar from './pages/Navbar';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
