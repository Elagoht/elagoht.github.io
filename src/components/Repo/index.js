import React from "react"
import LangColors from "./LangColors"
import Languages from "./Languages"
import License from "./License"
import Star from "../Icons/Star.js"
import Fork from "../Icons/Fork.js"
import Git from "../Icons/Git"
import { visit } from "../../translations/Projects"
import { LanguageContext } from "../../contexts/LanguageContext"
import { useContext } from "react"

function Repo({ data: repo }) {
  Languages.defaultProps = {
    lang: "Markdown",
  }

  const { language } = useContext(LanguageContext)

  if (!repo.archived) {
    return (
      <div
        className="card flex-nowrap border-b-4"
        style={{ borderBottomColor: LangColors[repo.language] }}
      >
        <div className="overflow-hidden text-ellipsis flex-shrink-0 rounded-t flex gap-2">
          {repo.fork ? <Fork /> : <Git />}
          <a
            target="_blank"
            rel="noreferrer"
            href={repo.html_url}
            className="text-xl text-orange-700 dark:text-orange-400 font-bold"
          >
            {repo.name}
          </a>
        </div>
        {repo.description !== null && (
          <div className="h-full">{repo.description}</div>
        )}
        <div className="mt-auto flex justify-end items-center gap-4 flex-shrink-0">
          {repo.homepage !== "" && repo.homepage !== null && (
            <a
              href={repo.homepage}
              className="mr-auto rounded-lg px-2 py-1 border border-orange-500 !text-orange-500 hover:bg-orange-500 hover:!text-orange-300"
            >
              {visit[language]}
            </a>
          )}
          {repo.license !== null && <License lic={repo.license.name} />}
          {repo.language == null ? (
            <Languages />
          ) : (
            <Languages lang={repo.language} />
          )}
          {repo.stargazers_count !== 0 && (
            <div className="flex gap-2">
              <Star />
              {repo.stargazers_count}
            </div>
          )}
          {repo.forks_count > 0 && (
            <div className="flex gap-2">
              <Fork />
              {repo.forks_count}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Repo
