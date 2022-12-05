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
      <Route exact path="/" element={<AboutMe />} />
      <Route path="publications" element={<Publications />} />
      <Route path="resume" element={<Resume />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact-me" element={<ContactMe />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </AnimatePresence>
}

export default AnimatedRoots