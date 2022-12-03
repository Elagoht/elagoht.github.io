import React from 'react'
import Section from '../../components/Skeleton/Section'
import { LanguageContext } from "../../contexts/LanguageContext"
import { useContext } from "react";

function Error404() {
  const { language } = useContext(LanguageContext)

  return <Section>
    {language === "tr"
      ? <h3>Sayfa Bulunamadı.</h3>
      : <h3>Page Not Found.</h3>
    }
  </Section>
}

export default Error404