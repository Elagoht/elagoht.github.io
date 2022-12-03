import { motion } from "framer-motion"
import scrollToContent from "../../hooks/scrollToContent"

function Section({ children }) {
  scrollToContent()
  return <motion.div
    initial={{ opacity: 0, marginTop: 50 }}
    animate={{ opacity: 1, marginTop: 0, transition: { duration: .5 } }}
    exit={{ opacity: 0, marginTop: 50, transition: { duration: .5 } }}
  >
    <section className="p-8 max-sm:p-4 m-auto max-w-screen-lg flex flex-col gap-4">
      {children}
    </section>
  </motion.div>
}

export default Section
