import { useEffect } from "react"

function useScrollToContent() {
  useEffect(() => {
    const profile = document.getElementById("profile").offsetHeight
    if (document.body.scrollHeight - profile > window.innerHeight) {
      window.scrollTo({
        top: profile,
        behavior: "smooth"
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }, [])
}

export default useScrollToContent