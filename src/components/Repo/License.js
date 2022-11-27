import React from 'react'

function License({ lic }) {

  const licenses = {
    "GNU General Public License v3.0": "GPLv3",
    "MIT License": "MIT",
    "The Unlicense": "UnLicense",
    "Apache License 2.0": "Apache v2"
  }

  return <div>
    {licenses[lic]}
  </div>
}

export default License