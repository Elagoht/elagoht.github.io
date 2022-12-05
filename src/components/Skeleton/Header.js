import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { ThemeContext } from "../../contexts/ThemeContext"
import { LanguageContext } from "../../contexts/LanguageContext"
import { menuItems } from "../../translations/Header"

function Header() {

  const [menu, setMenu] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const { theme, saveTheme } = useContext(ThemeContext)
  const { language, saveLanguage } = useContext(LanguageContext)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  useEffect(() => {
    if (width >= 640) {
      setMenu(false)
    }
  }, [width])

  const scrollToContent = () => {
    const profile = document.getElementById("profile").offsetHeight
    if (document.body.scrollHeight - profile > window.innerHeight) {
      window.scrollTo({
        top: profile,
        behavior: "smooth"
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }

  return <header className="fixed top-0 left-0 right-0 bg-zinc-900 h-14 items-center z-40">
    <div className="flex justify-between m-auto max-w-screen-lg">
      <motion.div
        whileTap={{ scale: [1, .5] }}
        transition={{ duration: .15 }}
        onClick={() => setMenu(prev => !prev)} className="cursor-pointer flex flex-col p-[15px] gap-2 sm:hidden">
        <div className={"hamburger" + (menu ? " rotate-45 translate-y-[11px]" : "")}></div>
        <div className={"hamburger" + (menu ? " opacity-0" : "")}></div>
        <div className={"hamburger" + (menu ? " -rotate-45 -translate-y-[11px]" : "")}></div>
      </motion.div>
      <div onClick={() => setMenu(false)} className={"transition-all max-sm:absolute max-sm:w-64 max-sm:bg-zinc-800 max-sm:mt-14 max-sm:h-[100vh] max-[400px]:w-full " + (menu ? "max-sm:left-0" : "max-sm:-left-64 max-[400px]:-left-full ")}>
        <nav className="flex max-sm:py-1 sm:px-1 max-sm:flex-col">
          <NavLink onClick={scrollToContent} to="portfolio" activeclassname="active" className="header-button">{menuItems[language][0]}</NavLink>
          <NavLink onClick={scrollToContent} to="portfolio/resume" activeclassname="active" className="header-button">{menuItems[language][1]}</NavLink>
          <NavLink onClick={scrollToContent} to="portfolio/projects" activeclassname="active" className="header-button">{menuItems[language][2]}</NavLink>
          <NavLink onClick={scrollToContent} to="portfolio/publications" activeclassname="active" className="header-button">{menuItems[language][3]}</NavLink>
          <NavLink onClick={scrollToContent} to="portfolio/contact-me" activeclassname="active" className="header-button">{menuItems[language][4]}</NavLink>
        </nav>
      </div>
      <div className="flex py-1">
        <motion.div
          initial={{ opacity: 1 }}
          whileHover={{ opacity: [1, .7], transition: { duration: .5, repeat: Infinity, repeatType: "mirror" } }}
          whileTap={{ scale: [1, .8] }}
          transition={{ duration: .15 }}
          className={"cursor-pointer rounded-full w-8 h-8 p-2 my-2 select-none border-2 border-zinc-300 bg-cover " + (language === "en" ? "bg-flag-tr" : "bg-flag-en")}
          onClick={() => saveLanguage(language === "tr"
            ? "en"
            : "tr"
          )}
        > </motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: [-30, 30], transition: { duration: .5, repeat: Infinity, repeatType: "mirror" } }}
          whileTap={{ scale: [1, .8] }}
          transition={{ duration: .15 }}
          className="cursor-pointer rounded-full bg-zinc-600 w-8 h-8 p-1 m-2"
          onClick={() => saveTheme(theme === "dark"
            ? "light"
            : "dark"
          )}
        >
          {theme === "dark"
            ? <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="fill-current text-orange-300"><path d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05 4.575 6q-.3-.275-.288-.7.013-.425.288-.725.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7 0 .4-.275.7-.275.3-.687.287-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712 0-.413.275-.688.275-.3.688-.287.412.012.712.287L19.425 18q.3.275.288.7-.013.425-.288.725-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688.012-.412.287-.712L18 4.575q.275-.3.7-.288.425.013.725.288.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275.412 0 .687.275.3.275.288.688-.013.412-.288.712L6 19.425q-.275.3-.7.287-.425-.012-.725-.287ZM12 12Z" /></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="fill-current text-indigo-200"><path d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025.337.025.662.075-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613 1.15-.612 1.875-1.637.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Zm0-2q2.2 0 3.95-1.212 1.75-1.213 2.55-3.163-.5.125-1 .2-.5.075-1 .075-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z" /></svg>
          }
        </motion.div>
      </div>
      {menu && <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: .15 } }}
        exit={{ opacity: 0, transition: { duration: .15 } }}
        className="h-[100vh] w-full bg-black absolute top-0 -z-10 mt-14 bg-opacity-50"
        onClick={() => setMenu(false)}
      ></motion.div>}
    </div>
  </header >
}

export default Header
