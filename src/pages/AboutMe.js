import Badges from "../components/Badges";
import Section from "../components/Skeleton/Section";
import { aboutMe, h2s, h3s, knownLanguages, languages, mainTitle } from "../translations/About";
import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext";

function AboutMe() {
  const { language } = useContext(LanguageContext)

  return <Section>
    {mainTitle[language]}

    <div className="text-justify">
      {aboutMe[language]}
    </div>

    {h2s[language][0]}

    {h3s[language][0]}
    <Badges
      data={[
        ["HTML-2012-E34F26", "html5"],
        ["CSS-2012-1572B6", "css3"],
        ["JavaScript-2015-c5b218", "javascript"],
        ["Python-2018-3776AB", "python"],
        ["SQLite-2018-003B57", "sqlite"],
        ["JSON-2019-333333", "json"],
        ["NumPy-2021-013243", "numpy"],
        ["Pandas-2021-150458", "pandas"],
        ["MatPlotLib-2021-E10098", "graphql"],
        ["Qt-2020-3FCE51", "qt"],
        ["Markdown-2020-000000", "markdown"],
        ["Bash-2021-4EAA25", "gnubash"],
        ["Django-2021-092E20", "django"],
        ["Awk-2022-666666", "textpattern"],
        ["React-2022-61DAFB", "react"],
        ["Tailwind_CSS-2022-06B6D4", "tailwindcss"],
        ["Bootstrap-2022-7952B3", "bootstrap"]
      ]}
      styles={"justify-center"}
    />

    {h3s[language][1]}
    <div className="flex flex-wrap justify-center">
      <Badges
        data={[
          ["GNU_Linux-0D597F", "linux"],
          ["Git-F05032", "git"],
          ["GIMP-5C5543", "gimp"],
          ["Vim-019733", "vim"],
          ["Neovim-57A143", "neovim"],
          ["Nano-4A90E2", "nano"],
          ["Kdenlive-527EB2", "kdenlive"],
          ["Audacity-0000CC", "audacity"],
          ["MuseScore-1A70B8", "musescore"],
          ["Only_Office-44444444", "onlyoffice"],
          ["Libre_Office-18A303", "libreoffice"],
          ["Open_Office-0E85CD", "apacheopenoffice"],
          ["Microsoft_Office-D83B01", "microsoftoffice"]
        ]}
        styles={"justify-center"}
      />
    </div>

    {h2s[language][1]}

    <div className="columns-2 max-sm:columns-1">
      <div className="flex items-center">
        {languages[language][0]} <img className="m-1 rounded-full" alt="Turkish" src={`https://img.shields.io/badge/${knownLanguages[language][0]}-db0a16?logo=homeassistantcommunitystore&logoColor=white&style=flat-square`} />
      </div>
      <div className="flex items-center">
        {languages[language][1]} <img className="m-1 rounded-full" alt="English" src={`https://img.shields.io/badge/${knownLanguages[language][1]}-11145b?logo=googleearth&logoColor=white&style=flat-square`} />
      </div>
    </div>
  </Section>
}

export default AboutMe
