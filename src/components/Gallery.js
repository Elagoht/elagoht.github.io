import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react";


function Gallery({ medias, className }) {

  const [index, setIndex] = useState(0)
  const [visibles, setVisibles] = useState(new Array(medias.length).fill(false))
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    let newState = new Array(medias.length).fill(false)
    newState[index] = true
    setVisibles([...newState])

  }, [index, medias.length])

  const manageIndex = (dir) => {
    setIndex(dir === -1
      ? (index === 0 ? medias.length - 1 : prev => prev - 1)
      : (index === medias.length - 1 ? 0 : prev => prev + 1)
    )
  }

  return <figure className={"flex flex-col m-2 " + className}>
    <AnimatePresence mode="wait">
      {medias.map((media, i) => (
        media.type === "img"
          ? <motion.div
            initial={{ display: visibles[i] ? "unset" : "none", opacity: visibles[i] ? 1 : 0, scale: visibles[i] ? "100%" : "50%" }}
            animate={{ display: visibles[i] ? "unset" : "none", opacity: visibles[i] ? 1 : 0, scale: visibles[i] ? "100%" : "50%", transition: { duration: .5 } }}
            key={i}>
            <img src={media.src} alt={media.alt} />
          </motion.div>
          : <motion.div
            initial={{ display: visibles[i] ? "unset" : "none", opacity: visibles[i] ? 1 : 0, scale: visibles[i] ? "100%" : "50%" }}
            animate={{ display: visibles[i] ? "unset" : "none", opacity: visibles[i] ? 1 : 0, scale: visibles[i] ? "100%" : "50%", transition: { duration: .5 } }}
            key={i}>
            <iframe src={media.src} title={media.title} allowFullScreen>Your browser does not support this media</iframe>
          </motion.div>
      ))}
    </AnimatePresence>
    <div className="flex gap-4 mt-4 items-center">
      <motion.div
        whileTap={{ scale: [1, .8] }}
        transition={{ duration: .15 }}
      >
        <button className="gallery-button" onClick={() => manageIndex(-1)}>&#10092;</button>
      </motion.div>
      <figcaption className="flex-1 text-center text-lg text-ellipsis overflow-hidden whitespace-nowrap">{medias[index].title[language]}</figcaption>
      <motion.div
        whileTap={{ scale: [1, .8] }}
        transition={{ duration: .15 }}
      >
        <button className="gallery-button" onClick={() => manageIndex(1)}>&#10093;</button>
      </motion.div>
    </div>
  </figure >

}

export default Gallery