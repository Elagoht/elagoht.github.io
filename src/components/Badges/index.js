import React from 'react'

function Badges({ data, styles, isSmall, extendURL }) {

  return <div className={"flex flex-wrap gap-2 my-2 " + styles}>
    {data.map((badge, i) => (
      <img key={i} className="rounded-full" src={
        (extendURL
          ? "https://img.shields.io/" + badge
          : "https://img.shields.io/badge/" + badge[0] + "?logo=" + badge[1]
        ) + "&logoColor=white&style=" +
        (isSmall
          ? "flat"
          : "for-the-badge"
        )}
      />
    ))}
  </div>
}

export default Badges