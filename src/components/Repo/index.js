import React from 'react'
import Languages from './Languages'
import License from './License'
import useLanguages from './useLanguages'

function Repo({ data: repo }) {
  Languages.defaultProps = {
    lang: "Markdown"
  }

  if (!repo.archived) {
    return <div className="flex flex-col border-2 border-zinc-700 p-4 rounded-xl gap-3 ">
      <div className="rainbow-grad border-b-2 border-zinc-700 p-4 -m-4 mb-0 bg-zinc-800 rounded-t-xl  overflow-hidden text-ellipsis">
        <a target="_blank" href={repo.html_url} className={"text-pink-500 text-xl" + (repo.fork == true
          ? " label-icon bg-icon-fork"
          : "")}
        >
          {repo.name}
        </a>
      </div>
      {repo.description !== null
        && <div>{repo.description}</div>
      }
      <div className="rainbow-grad-semi-transparent border-t-2 border-zinc-700 p-4 -m-4 bg-zinc-800 rounded-b-xl mt-auto flex gap-4">

        {(repo.language == null)
          ? <Languages />
          : <Languages lang={repo.language} />}
        {repo.license !== null
          && <License lic={repo.license.name} />}
        <div className="flex-1"></div>
        {repo.stargazers_count !== 0
          && <div className="label-icon bg-icon-star">{repo.stargazers_count}</div>}
        {repo.forks_count > 0
          && <div className="label-icon bg-icon-fork">{repo.forks_count}</div>}
      </div>
    </div >
  }
}

export default Repo
