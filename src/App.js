import Aside from "./components/Skeleton/Aside";
import Header from "./components/Skeleton/Header";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Resume from "./pages/Resume";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return <div>
    <BrowserRouter>
      <Header />
      <Aside />
      <Routes>
        <Route path="/">
          <Route index element={<AboutMe />} />
          <Route path="publications" element={<Publications />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact-me" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;