import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import MainPage from "./Pages/MainPage";

export default function App() {
  return (
    <Routes>
      <Route index element={<MainPage />}></Route>
      <Route path="/Pages/Contact" element={<Contact />}></Route>
    </Routes>
  );
}
