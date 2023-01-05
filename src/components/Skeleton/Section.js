import { motion } from "framer-motion"

function Section({ children }) {
  return <motion.div
    initial={{ opacity: 0, }}
    animate={{ opacity: 1, transition: { duration: .5 } }}
    exit={{ opacity: 0, transition: { duration: .5 } }}
  >
    <section className="p-8 max-sm:p-4 m-auto max-w-screen-lg flex flex-col gap-4">
      {children}
    </section>
  </motion.div>
}

export default Section
