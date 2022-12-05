import Profile from "./components/Skeleton/Profile";
import Header from "./components/Skeleton/Header";
import "./index.css"
import AnimatedRoots from "./pages/AnimatedRoutes";
import ThemeProvider from "./contexts/ThemeContext"
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./contexts/LanguageContext";
import Footer from "./components/Skeleton/Footer";

function App() {

  return <LanguageProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Profile />
        <AnimatedRoots />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </LanguageProvider>
}

export default App;
