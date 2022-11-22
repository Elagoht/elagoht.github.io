import Aside from "./components/Skeleton/Aside";
import Header from "./components/Skeleton/Header";
import Section from "./components/Skeleton/Section";
import AboutMe from "./components/Skeleton/Section/AboutMe";
import ContactMe from "./components/Skeleton/Section/ContactMe";
import Projects from "./components/Skeleton/Section/Projects";
import Resume from "./components/Skeleton/Section/Resume";
import "./design.css"

function App() {
  return <div>
    <Header/>
    <Aside/>
    <Section>
      <AboutMe/>
    </Section>
    <Section>
      <Resume/>
    </Section>
    <Section>
      <Projects/>
    </Section>
    <Section>
      <ContactMe/>
    </Section>
  </div>
}

export default App;