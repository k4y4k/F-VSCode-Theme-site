import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const fLink = 'https://marketplace.visualstudio.com/items?itemName=k4y4k.f'

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
      <h1 className='text-6xl font-bold italic text-storyteller font-display inline-block inline-block'>
        {queryData.site.siteMetadata.title}
      </h1>
      <br />
      <h2 className='font-display inline-block inline my-8 p-3 text-3xl text-white font-display inline-block'>
        {queryData.site.siteMetadata.description}
      </h2>
      <br />
      <a
        href={fLink}
        className='bg-transparent hover:bg-storyteller text-storyteller font-semibold hover:text-white py-2 px-4 border border-storyteller hover:border-transparent rounded inline-block'
      >
        See it on the Marketplace
      </a>
    </section>
  )
}

const StyledHeader = styled(Header)``

export default StyledHeader
