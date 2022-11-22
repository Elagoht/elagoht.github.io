import React from 'react'

function Aside() {
  return <aside className="margin-center just-center max-width">
        <nav id="main-menu" className="flex wrap just-center border-thick">
            <a className="main-menu-item">About Me</a>
            <a className="main-menu-item">Resume</a>
            <a className="main-menu-item">Projects</a>
            <a className="main-menu-item">Publications</a>
            <a className="main-menu-item">Contact Me</a>
        </nav>
    </aside>
}

export default Aside