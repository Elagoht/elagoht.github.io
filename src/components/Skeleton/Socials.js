import React from 'react'

function Socials({ className }) {
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

  return <div className={"flex flex-wrap justify-center " + className}>
    {navlinks.map((link, i) => (
      <a target="_blank" key={i} title={link["title"]} href={link["link"]}>
        <div className={"nav-link " + link["bg"]}></div>
      </a>
    ))}
  </div>
}

export default Socials