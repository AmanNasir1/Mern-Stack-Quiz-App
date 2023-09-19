import React from "react";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/endscreen" element={<EndScreen />} />
    </Routes>
  );
}

export default App;
