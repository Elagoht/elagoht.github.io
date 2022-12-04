import Titles from '../Titles'
import Socials from './Socials'
import { LanguageContext } from "../../contexts/LanguageContext"
import { useContext } from 'react'
import titles from "../../translations/Titles"

function Profile() {

  const { language } = useContext(LanguageContext)

  return <aside id="profile">
    <div className="bg-code-snippet bg-fixed max-md:py-8 py-24 bg-top">
      <div className="flex max-md:flex-col justify-around items-center transition-all max-w-screen-lg m-auto gap-4 max-lg:mx-8">
        <div className="transition-all border-2 rounded-full w-64 max-lg:w-52 aspect-square bg-profile-picture bg-contain shrink-0"></div>
        <div className="flex flex-col text-center justify-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <span id="my-name" className="transition-all text-white text-8xl max-lg:text-6xl max-sm:text-5xl font-display">Furkan Baytekin</span>
            <Titles
              titles={titles[language]}
            />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  </aside>
}

export default Profile
