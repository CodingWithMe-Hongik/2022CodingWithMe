import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import ContentPage from "./pages/contentpage";
import MainPage from "./pages/mainpage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/mainpage" />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/mainpage/:contentId" element={<ContentPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
