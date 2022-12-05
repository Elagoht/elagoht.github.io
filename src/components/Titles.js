import { useEffect, useState } from "react"

function Titles({ titles }) {

  const [index, setIndex] = useState(0)
  const [text, setText] = useState(titles[index])
  const [letter, setLetter] = useState(1)
  const [result, setResult] = useState(titles[0][0])

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setIndex(prev => index < titles.length - 1 ? prev + 1 : 0)
      setText(titles[index])
    }, 1500)
    return () => {
      setLetter(1)
      clearTimeout(wordTimer)
    }
  }, [index, titles])

  useEffect(() => {
    const letterTimer = setInterval(() => {
      setLetter(prev => prev + 1)
      setResult(text.slice(0, letter))
    }, 50);

    return () => {
      clearTimeout(letterTimer)
    }

  }, [letter, text])

  return <span id="my-title" className="text-orange-300 font-code text-2xl px-1">{result}</span>

}

export default Titles