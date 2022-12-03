import React from 'react'
import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react";

function Education({ data, children }) {
  const { language } = useContext(LanguageContext)
  return <div className="card">
    <div>
      <div className="label-icon bg-icon-school">{data.school[language]}</div>
      <div className="label-icon bg-icon-edu">{data.level[language]}</div>
      <div className="label-icon bg-icon-date">{data.date}</div>
    </div>
    <hr className="border-zinc-500" />
    <div>
      <img src={data.logo} alt={data.school[language]} className="w-1/4 mx-2 float-right" />
      <div>{children}</div>
    </div>
    <div className='clear-both'></div>
  </div>
}

export default Education