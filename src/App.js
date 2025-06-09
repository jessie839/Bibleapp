import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Menu from "./components/Menu";
import Learn from "./components/Learn";
import Quiz from "./components/Quiz";
import "./App.css";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/learn" element={<Learn />}/>
        <Route path="/quiz" element={<Quiz />}/>
      </Routes>
    </Router>
  );

}
