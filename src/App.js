import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebcamCapture from './WebcamCapture';
import Home from './home';

// function Home() { 
//   return <h2>Welcome Home</h2>;
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebcamCapture />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
