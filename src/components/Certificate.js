import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"

function Certificate({ data }) {

  const [popUp, setPopUp] = useState(false)
  const [load, setLoad] = useState(false)

  return <div className="card">
    <div className="flex justify-between w-full gap-4">
      <div className="flex flex-col">
        <div style={{ wordBreak: "break-word", hyphens: "manual" }} className="label-icon bg-icon-certificate text-indigo-500">{data.title}</div>
        <div className="label-icon bg-icon-instructor text-purple-500">{data.instructor}</div>
        <a style={{ wordBreak: "break-word" }} className="break-words label-icon bg-icon-credential" href={data.link}>{data.credential}</a>
      </div>
      <div style={{ backgroundImage: `url(${data.thumb})` }} className="group relative w-[150px] h-[108px] bg-center bg-cover flex-shrink-0  border border-zinc-400" onClick={() => setPopUp(prev => !prev)}>
        <div className="cursor-pointer rounded-sm left-0 top-0 absolute bg-black opacity-0 group-hover:opacity-70 transition-all flex justify-center items-center w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="white" d="M10 38v-9.75h2.25v7.5h7.5V38Zm0-18.25V10h9.75v2.25h-7.5v7.5ZM28.25 38v-2.25h7.5v-7.5H38V38Zm7.5-18.25v-7.5h-7.5V10H38v9.75Z" /></svg>
        </div>
      </div>
    </div>
    <AnimatePresence>
      {popUp && <div
        onClick={() => setPopUp(false)}
        className="select-none transition-all left-0 top-0 fixed w-full h-full bg-opacity-70 max-w-full max-h-full z-50"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, top: "100vh" },
            visible: { opacity: 1, top: 0, transition: { duration: .3 } },
            exit: { opacity: 0, top: "-100vh", transition: { duration: .3 } }
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="close-menu"
          className="flex relative items-center justify-center"
        >
          <img src={data.document} alt={data.title} className={"max-w-full max-h-full " + (!load && "hidden")} onLoad={() => setLoad(true)} />
          {!load && <motion.div
            initial={{ scale: 3 }}
            animate={{ rotate: [0, 360], transition: { duration: 2, repeat: Infinity, ease: "anticipate" } }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" className="fill-current text-zinc-50">
              <circle cx="13.792" cy="3.082" r="3.082" />
              <circle cx="13.792" cy="24.501" r="1.849" />
              <circle cx="6.219" cy="6.218" r="2.774" />
              <circle cx="21.365" cy="21.363" r="1.541" />
              <circle cx="3.082" cy="13.792" r="2.465" />
              <circle cx="24.501" cy="13.791" r="1.232" />
              <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
			C6.902,18.996,5.537,18.988,4.694,19.84z"/>
              <circle cx="21.364" cy="6.218" r="0.924" />
            </svg>
          </motion.div>}
        </motion.div>
      </div>
      }
    </AnimatePresence>
  </div >
}

export default Certificate