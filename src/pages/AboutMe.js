import Badges from "../components/Badges";
import Section from "../components/Skeleton/Section";
import { aboutMe, h2s, h3s, knownLanguages, languages, mainTitle } from "../translations/About";
import { useContext, useEffect } from "react"
import { LanguageContext } from "../contexts/LanguageContext";

function AboutMe() {
  const { language } = useContext(LanguageContext)
  const digitalLanguages = [
    ["2012", "HTML-E34F26", "html5"],
    ["2012", "CSS-1572B6", "css3"],
    ["2015", "JavaScript-c5b218", "javascript"],
    ["2018", "Python-3776AB", "python"],
    ["2018", "SQLite-003B57", "sqlite"],
    ["2019", "JSON-333333", "json"],
    ["2020", "Markdown-000000", "markdown"],
    ["2020", "Qt-3FCE51", "qt"],
    ["2021", "NumPy-013243", "numpy"],
    ["2021", "Pandas-150458", "pandas"],
    ["2021", "MatPlotLib-E10098", "graphql"],
    ["2021", "Bash-4EAA25", "gnubash"],
    ["2021", "Django-092E20", "django"],
    ["2022", "Awk-666666", "textpattern"],
    ["2022", "React-41BADB", "react"],
    ["2022", "Tailwind_CSS-06B6D4", "tailwindcss"],
    ["2022", "Framer_Motion-0055FF", "framer"],
    ["2022", "Bootstrap-7952B3", "bootstrap"]
  ]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return <Section>
    {mainTitle[language]}

    <div className="text-justify">
      {aboutMe[language]}
    </div>

    {h2s[language][0]}

    {h3s[language][0]}

    <ul className="my-4 relative columns-4 max-lg:columns-3 max-md:columns-2 max-[480px]:columns-1">
      {digitalLanguages.map((badge, i) => (
        <li key={i} className="time-line">
          <div className="flex gap-2 items-center">
            <span className="font-mono">{badge[0]}</span>
            <img src={"https://img.shields.io/badge/" + badge[1] + "?logo=" + badge[2] + "&logoColor=white&style=for-the-badge"}
              className="rounded"
              alt="language badge"
            />
          </div>
        </li>
      ))}
    </ul>

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

    <div className="columns-2">
      <div className="flex flex-col justify-center items-center">
        {languages[language][0]} <img className="m-1 rounded-full" alt="Turkish" src={`https://img.shields.io/badge/${knownLanguages[language][0]}-db0a16?logo=homeassistantcommunitystore&logoColor=white&style=for-the-badge`} />
      </div>
      <div className="flex flex-col justify-center items-center">
        {languages[language][1]} <img className="m-1 rounded-full" alt="English" src={`https://img.shields.io/badge/${knownLanguages[language][1]}-11145b?logo=googleearth&logoColor=white&style=for-the-badge`} />
      </div>
    </div>
  </Section>
}

export default AboutMe
