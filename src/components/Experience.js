import React from 'react'
import Badges from './Badges'
import Gallery from './Gallery'
import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react";

function Experience({ data, badges, medias, className, children }) {

  const { language } = useContext(LanguageContext)

  return <div>
    <div>
      <a className="label-icon bg-icon-label font-bold font-title" href={data.link}>{data.title[language]}</a>
      <div className="label-icon bg-icon-role text-purple-400">{data.role[language]}</div>
      <div className="label-icon bg-icon-date text-pink-400">{data.date[language]}</div>
    </div>
    <Badges data={badges} isSmall={true} />
    <div>
      <Gallery medias={medias} className={"md:w-2/5 max-md:float-none " + className} />
      {children}
    </div>
  </div>
}

export default Experience