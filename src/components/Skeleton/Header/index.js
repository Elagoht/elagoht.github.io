import React from 'react'
import Titles from '../../Titles'

function Header() {
  return <header>
    <div id="header-container" className="flex space-between align-center border-thick box padd-medium margin-center max-width">
      <div id="profile-picture" className="border-thick circle box-small square bg-cover"></div>
      <div className="flex column flex-1 align-center">
        <div id="name-info" className="flex column align-center">
          <span id="my-name">Furkan Baytekin</span>
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
        <div id="profile-links" className="flex wrap just-center">
          <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/furkan-baytekin/">
            <div id="linked-in" className="link-icon square bg-cover margin-small"></div></a>
          <a target="_blank" title="GitHub" href="https://github.com/Elagoht">
            <div id="github" className="link-icon square bg-cover margin-small"></div></a>
          <a target="_blank" title="YouTube" href="https://www.youtube.com/@herkesicinlinux">
            <div id="youtube" className="link-icon square bg-cover margin-small"></div></a>
          <a target="_blank" title="AUR" href="https://aur.archlinux.org/packages?O=0&SeB=m&K=Elagoht&outdated=&SB=p&SO=d&PP=50&submit=Go">
            <div id="aur" className="link-icon square bg-cover margin-small"></div></a>
          <a target="_blank" title="Lure" href="https://github.com/Arsen6331/lure-repo/pulls?q=is:pr+is:closed+author:Elagoht">
            <div id="lure" className="link-icon square bg-cover margin-small"></div></a>
          <a target="_blank" title="Itch" href="https://elagoht.itch.io/">
            <div id="itch" className="link-icon square bg-cover margin-small"></div></a>
          <a target="_blank" title="Kaggle" href="https://www.kaggle.com/furkanbaytekin">
            <div id="kaggle" className="link-icon square bg-cover margin-small"></div></a>
          <a title="E-Mail" href="mailto:furkanbaytekin@gmail.com">
            <div id="mail" className="link-icon square bg-cover margin-small"></div></a>
          <a target="_blank" title="Telegram" href="https://t.me/elagoht">
            <div id="telegram" className="link-icon square bg-cover margin-small"></div></a>
        </div>
      </div>
    </div>
  </header>
}

export default Header
