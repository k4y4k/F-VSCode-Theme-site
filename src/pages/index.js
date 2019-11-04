import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GotMarkdown from '../components/Sections/GotMarkdown'
import Header from '../components/Sections/Header'
import Structure from '../components/Sections/Structure'
import MoreThanWords from '../components/Sections/MoreThanWords'
import Download from '../components/Sections/Download'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`F`, `theme`, `visual studio code`, `vscode`]}
        title='F'
      />

      <Header></Header>
      <GotMarkdown></GotMarkdown>
      <Structure></Structure>
      <MoreThanWords></MoreThanWords>
      <Download></Download>
    </Layout>
  )
}

export default IndexPage
