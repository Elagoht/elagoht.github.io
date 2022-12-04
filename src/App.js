import Profile from "./components/Skeleton/Profile";
import Header from "./components/Skeleton/Header";
import "./index.css"
import AnimatedRoots from "./pages/AnimatedRoutes";
import ThemeProvider from "./contexts/ThemeContext"
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./contexts/LanguageContext";

function App() {

  return <LanguageProvider>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Profile />
        <AnimatedRoots />
      </BrowserRouter>
    </ThemeProvider>
  </LanguageProvider>
}

export default App;
