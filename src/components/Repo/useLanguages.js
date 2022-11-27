// I'll use that if I get a token

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())
function useLanguages(repoName) {
  const { data, error } = useSWR(`https://api.github.com/repos/Elagoht/${repoName}/languages`, fetcher)

  return {
    langs: data,
    isLoading: !error && !data,
    isError: error
  }
}
export default useLanguages