import React from "react"
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Publications from "./Publications";
import Resume from "./Resume";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import Error404 from "./Errors/Error404";

function AnimatedRoots() {
  const location = useLocation();

  return <AnimatePresence mode="wait">
    <Routes key={location.pathname} location={location}>
      <Route index path="portfolio" element={<AboutMe />} />
      <Route path="/portfolio/publications" element={<Publications />} />
      <Route path="/portfolio/resume" element={<Resume />} />
      <Route path="/portfolio/projects" element={<Projects />} />
      <Route path="/portfolio/contact-me" element={<ContactMe />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </AnimatePresence>
}

export default AnimatedRoots