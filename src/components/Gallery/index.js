import React, { useEffect, useState } from 'react'

function Gallery({ medias, className }) {

  const [index, setIndex] = useState(0)
  const [visibles, setVisibles] = useState(new Array(medias.length).fill(false))

  useEffect(() => {
    let newState = new Array(medias.length).fill(false)
    newState[index] = true
    setVisibles([...newState])

  }, [index])

  const manageIndex = (dir) => {
    setIndex(dir == -1
      ? (index == 0 ? medias.length - 1 : prev => prev - 1)
      : (index == medias.length - 1 ? 0 : prev => prev + 1)
    )
  }

  return <figure className={"flex flex-col gap-3 m-2 " + className}>
    {medias.map((media, i) => (
      media.type == "img"
        ? <img key={i} src={media.src} alt={media.alt} className={visibles[i] ? "" : "hidden"} />
        : <iframe key={i} src={media.src} title={media.title} className={visibles[i] ? "" : "hidden"} allowFullScreen>Your browser does not support this media</iframe>
    ))}
    <div className="flex gap-4 items-center">
      <button className="gallery-button" onClick={() => manageIndex(-1)}>&#10092;</button>
      <figcaption className="flex-1 text-center text-lg text-ellipsis overflow-hidden whitespace-nowrap">{medias[index].title}</figcaption>
      <button className="gallery-button" onClick={() => manageIndex(1)}>&#10093;</button>
    </div>
  </figure >

}

export default Gallery