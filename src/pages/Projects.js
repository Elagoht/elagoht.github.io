import Section from "../components/Skeleton/Section";
import Repo from "../components/Repo";
import useSWR from "swr";

function Projects() {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR("https://api.github.com/users/Elagoht/repos?sort=update&per_page=100", fetcher)

  if (error)
    return <Section>Yarra Yedin</Section>
  if (!data)
    return <Section>Loading</Section>
  if ("message" in data)
    return <Section>Yarra yemişin haberin yok</Section>

  return <Section>
    <h1>Projects</h1>
    <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
      {data.map((repo, i) => (
        <Repo key={i} data={repo} />
      ))}
    </div>
  </Section>
}

export default Projects