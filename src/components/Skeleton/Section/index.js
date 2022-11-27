import React from 'react'

function Section({ children }) {
  return <section className="rounded-3xl border-4 border-zinc-700 bg-zinc-900 text-gray-300 text-justify leading-relaxed m-auto max-w-screen-lg p-8 max-[480px]:p-4 transition-all flex flex-col gap-4">
    {children}
  </section>
}

export default Section
