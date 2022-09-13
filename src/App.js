import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Experiences from "./pages/Experiences";
import Experiences2 from "./pages/Experiences2";
import Experiences3 from "./pages/Experiences3";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences-1" element={<Experiences />} />
          <Route path="/experiences-2" element={<Experiences2 />} />
          <Route path="/experiences-3" element={<Experiences3 />} />
          <Route path="/projet-1" element={<Project />} />
          <Route path="/projet-2" element={<Project2 />} />
          <Route path="/projet-3" element={<Project3 />} />
          <Route path="/projet-4" element={<Project4 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
