import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Header = ({ className, children }) => {
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
    <section className='text-center border border-storyteller p-10'>
      <h1 className='text-6xl font-display inline-block'>
        {queryData.site.siteMetadata.title}
      </h1>
      <br />
      <h2 className='font-display inline my-8 p-3 text-2xl font-display'>
        {queryData.site.siteMetadata.description}
      </h2>
      <br />
      <button>get it</button>
    </section>
  )
}

const StyledHeader = styled(Header)``

export default StyledHeader
