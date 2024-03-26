import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import MainPage from "./Pages/MainPage";
import Profile from "./Pages/Profile";
import Blog from "./Pages/Blog";

export default function App() {
  return (
    <Routes>
      <Route index element={<MainPage />}></Route>
      <Route path="/Pages/Contact" element={<Contact />}></Route>
      <Route path="/Pages/Profile" element={<Profile />}></Route>
      <Route path="/Pages/Blog" element={<Blog />}></Route>
    </Routes>
  );
}
