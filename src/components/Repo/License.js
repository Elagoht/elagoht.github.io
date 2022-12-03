import React from 'react'
import Justice from "../Icons/Justice.js"

function License({ lic }) {

  const licenses = {
    "GNU General Public License v3.0": "GPLv3",
    "MIT License": "MIT",
    "The Unlicense": "UnLicense",
    "Apache License 2.0": "Apache v2"
  }

  return <div className="flex gap-2">
    <Justice />
    <div className="whitespace-nowrap">{licenses[lic]}</div>
  </div>
}

export default License