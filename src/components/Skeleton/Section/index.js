import React from 'react'

function Section({ children }) {
  return <section className="border-thick margin-center max-width rounded padd-large no-pad-h">
    {children}
  </section>
}

export default Section
