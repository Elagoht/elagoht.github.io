import { createContext, useState } from "react"

export const ThemeContext = createContext()

function ThemeProvider({ initialTheme, children }) {

  const [theme, setTheme] = useState(localStorage.getItem("theme") === undefined ? "light" : localStorage.getItem("theme"))

  const setHTML = () => {
    const root = document.documentElement
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark")
  }

  const saveTheme = (theme) => {
    setTheme(theme)
    setHTML()
    const root = document.documentElement
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark")
    localStorage.setItem("theme", theme)
  }

  useState(setHTML, [])

  initialTheme && saveTheme(initialTheme)
  const values = {
    theme,
    saveTheme
  }

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider