import { useEffect, useState } from "react"

function Titles({titles}) {

  const [index, setIndex] = useState(0)
  const [text, setText] = useState(titles[index])
  const [letter, setLetter] = useState(1)
  const [result, setResult] = useState(titles[0][0])
  
  useEffect(()=>{
    const wordTimer=setInterval(() => {
      if ( index < titles.length-1 ) { setIndex(prev => prev+1 ) } else { setIndex(0) }
      setText(titles[index])      
    },2000) 
    return () => {
      setLetter(1)
      clearTimeout(wordTimer)
    }
  },[index])

  useEffect(() => {
    
    let buffer=""

    const letterTimer=setInterval(() => {
      if ( letter < text.length ) { setLetter(prev => prev+1) }
      setResult(text.slice(0, letter))
    }, 75);

    return () => {
      clearTimeout(letterTimer)
    }

  },[letter])
  
  return <span id="my-title">{result}</span>

}

export default Titles