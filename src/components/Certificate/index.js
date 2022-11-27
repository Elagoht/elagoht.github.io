import React, { useState } from 'react'

function Certificate({ data }) {

  const [popUp, setPopUp] = useState(false)

  return <div className="card items-center">
    <div className="flex justify-between w-full">
      <div className="flex flex-col">
        <div className="label-icon bg-icon-certificate">{data.title}</div>
        <div className="label-icon bg-icon-instructor">{data.instructor}</div>
        <a className="break-words label-icon bg-icon-credential" href={data.link}>{data.credential}</a>
      </div>
      <div className="group relative w-[215px] h-[160px]" onClick={() => setPopUp(prev => !prev)}>
        <img src={data.thumb} className="select-none rounded-md w-[215px] h-[160px]" />
        <div className="cursor-pointer rounded-sm left-0 top-0 absolute w-[215px] h-[160px] bg-black opacity-0 group-hover:opacity-70 transition-all flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="white" d="M10 38v-9.75h2.25v7.5h7.5V38Zm0-18.25V10h9.75v2.25h-7.5v7.5ZM28.25 38v-2.25h7.5v-7.5H38V38Zm7.5-18.25v-7.5h-7.5V10H38v9.75Z" /></svg>
        </div>
      </div>
    </div>
    <div className={(popUp ? "flex opacity-100" : "hidden opacity-0") + " select-none transition-all left-0 top-0 fixed w-full h-full bg-zinc-800 bg-opacity-70 flex-col items-center justify-center max-w-full max-h-full z-10"} onClick={() => setPopUp(prev => !prev)}>
      <img src={data.document} className="top-0 left-0 max-w-full max-h-full" />
    </div>
  </div >
}

export default Certificate