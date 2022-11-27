import React from 'react'
import { NavLink } from 'react-router-dom'

function Aside() {
  return <aside className="margin-center just-center max-width">
        <nav id="main-menu" className="flex flex-wrap items-stretch just-center border-4 border-zinc-700 -my-1 max-w-[61rem] max-lg:mx-7 m-auto justify-center gap-1 rainbow-grad">
            <NavLink to="/" className="aside-button">About Me</NavLink>
            <NavLink to="resume" className="aside-button">Resume</NavLink>
            <NavLink to="projects" className="aside-button">Projects</NavLink>
            <NavLink to="publications" className="aside-button">Publications</NavLink>
            <NavLink to="contact-me" className="aside-button">Contact Me</NavLink>
        </nav>
    </aside>
}

export default Aside