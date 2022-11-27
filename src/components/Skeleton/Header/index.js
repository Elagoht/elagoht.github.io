import React from 'react'
import Titles from '../../Titles'

function Header() {

  const navlinks = [
    { title: "LinkedIn", link: "https://www.linkedin.com/in/furkan-baytekin/", bg: "bg-nav-linkedin" },
    { title: "GitHub", link: "https://github.com/Elagoht", bg: "bg-nav-github" },
    { title: "YouTube", link: "https://www.youtube.com/@herkesicinlinux", bg: "bg-nav-youtube" },
    { title: "AUR", link: "https://aur.archlinux.org/packages?O=0&SeB=m&K=Elagoht&outdated=&SB=p&SO=d&PP=50&submit=Go", bg: "bg-nav-aur" },
    { title: "Lure", link: "https://github.com/Arsen6331/lure-repo/pulls?q=is:pr+is:closed+author:Elagoht", bg: "bg-nav-lure" },
    { title: "Itch", link: "https://elagoht.itch.io/", bg: "bg-nav-itch" },
    { title: "Kaggle", link: "https://www.kaggle.com/furkanbaytekin", bg: "bg-nav-kaggle" },
    { title: "E-Mail", link: "mailto:furkanbaytekin@gmail.com", bg: "bg-nav-email" },
    { title: "Telegram", link: "https://t.me/elagoht", bg: "bg-nav-telegram" },
  ]

  return <header>
    <div className="max-md:flex-col flex justify-between items-center border-4 p-8 max-[480px]:p-4 transition-all max-w-screen-lg m-auto mt-6 border-zinc-700 bg-code-snippet bg-cover bg-center rounded-3xl gap-4">
      <div className="border-4 rounded-full w-48 h-48 bg-profile-picture bg-contain shrink-0"></div>
      <div className="flex flex-col text-center flex-1 justify-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <span id="my-name" className="text-white text-5xl font-display">Furkan Baytekin</span>
          <Titles
            titles={[
              "Software Developer",
              "Blog Writer",
              "Content Creator",
              "Book Author",
              "Game Developer",
              "Web Designer",
              "Music Composer",
              "Turkish Teacher"
            ]}
          />
        </div>
        <div id="profile-links" className="flex flex-wrap justify-center">
          {navlinks.map((link, i) => (
            <a target="_blank" key={i} title={link["title"]} href={link["link"]}>
              <div className={"nav-link " + link["bg"]}></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </header>
}

export default Header
