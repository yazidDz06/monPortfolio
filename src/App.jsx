import Portfolio from "./Fichier"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
function App() {
 

  return (
      <Router>
      <Routes>
         <Route path="/" element={< Portfolio/>} />
         
      </Routes>
    </Router>
   
  )
}

export default App
