import { createContext, useState } from "react"

export const LanguageContext = createContext()

function LanguageProvider({ initialLangugage, children }) {

  const [language, setLanguage] = useState(!localStorage["language"]
    ? "en"
    : localStorage.getItem("language"))
  const saveLanguage = (language) => {
    setLanguage(language)
    localStorage.setItem("language", language)
  }

  initialLangugage && saveLanguage(initialLangugage)
  const values = {
    language,
    saveLanguage
  }

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider