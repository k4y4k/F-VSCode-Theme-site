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
    <section id='header' className='text-center p-10'>
      <h1 className='text-6xl text-storyteller font-display inline-block inline-block'>
        {queryData.site.siteMetadata.title}
      </h1>
      <br />
      <h2 className='font-display inline-block inline my-8 p-3 text-3xl text-storyteller font-display inline-block'>
        {queryData.site.siteMetadata.description}
      </h2>
      <br />
      <button>get it</button>
    </section>
  )
}

const StyledHeader = styled(Header)``

export default StyledHeader
