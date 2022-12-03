import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

function HoverBubble({ title, children }) {
  const [shown, setShown] = useState(false)
  return <div className="relative flex justify-center">
    <div
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {children}
    </div>
    <AnimatePresence mode="wait">
      {shown &&
        <motion.div
          initial={{ opacity: 0, bottom: -60 }}
          animate={{ opacity: .9, bottom: -50, transition: { duration: .1 } }}
          exit={{ opacity: 0, transition: { duration: .1 } }}
          className="flex justify-center absolute border p-1 border-zinc-700 bg-zinc-800 text-zinc-200 before:block before:box-content before:w-4 before:h-4 before:border-zinc-700 before:bg-zinc-800 before:absolute before:rotate-45 before:-top-[9px] before:border-t before:border-l before:rounded-br-full"
        >
          {title}
        </motion.div>
      }
    </AnimatePresence>
  </div>
}

export default HoverBubble