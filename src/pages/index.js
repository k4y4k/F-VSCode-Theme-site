import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const queryData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />

      <section className='text-center border border-storyteller p-10'>
        <h2 className='text-2xl font-bold inline-block'>
          {queryData.site.siteMetadata.title}
        </h2>
        <br />
        <h3 className='font-bold inline my-8 p-3'>
          {queryData.site.siteMetadata.description}
        </h3>
      </section>
    </Layout>
  )
}

export default IndexPage
