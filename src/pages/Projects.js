import Section from "../components/Skeleton/Section";
import Repo from "../components/Repo";
import useSWR from "swr";
import { motion } from "framer-motion"
import useScrollToContent from "../hooks/scrollToContent"
import { errors, h4s, loading, mainTitle } from "../translations/Projects";
import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react";

function Projects() {

  useScrollToContent()
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR("https://api.github.com/users/Elagoht/repos?sort=update&per_page=100", fetcher)
  const { language } = useContext(LanguageContext)

  if (error)
    return <Section>
      {mainTitle[language]}
      <div className="error-box text-white">
        {h4s[language][0]}
        {errors[language][0]}
      </div>
    </Section>
  if (!data)
    return <Section>
      {mainTitle[language]}
      <div className="flex">
        {loading[language].map((char, i) =>
          <motion.span
            key={i}
            animate={{ marginTop: [0, 15, 15, 15], transition: { delay: i / 15, repeat: Infinity, repeatType: "reverse", duration: 1.2 } }}
            className="m-1"
          > {char}
          </motion.span>
        )}
      </div>
    </Section>
  if ("message" in data)
    return <Section>
      {mainTitle[language]}
      <div className="error-box text-white">
        {h4s[language][0]}
        {errors[language][1]}
        {h4s[language][1]}
        {errors[language][2]}
      </div>
    </Section>

  return <Section>
    {mainTitle[language]}
    <div className="grid gap-4 grid-cols-2 max-md:grid-cols-1">
      {data.map((repo, i) => (
        <Repo key={i} data={repo} />
      ))}
    </div>
  </Section>
}

export default Projects