import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const MoreThanWords = ({ className, children }) => {
  const queryData = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "md" }, name: { eq: "code" } }) {
        edges {
          node {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)

  console.log('queryData', queryData)

  return (
    <section className='p-10'>
      <h2 className='text-3xl italic text-storyteller font-display inline-block'>
        Writing more than words?
      </h2>
      <br />
      <h3 className='font-display inline-block text-xl mb-3 text-storyteller'>
        Awesome.
      </h3>

      <p className='my-4'>
        It's not just headings and asterisks that get the star treatment here.
      </p>

      <p className='my-4'>
        F makes sure that <span>comments don't get in your way.</span> Sharing
        examples? See{' '}
        <span className='inline font-monospace'>inline code blocks</span>{' '}
        clearly.
      </p>

      <p className='my-4'>
        Writing small novels of code? <em>F</em>ear not!
      </p>

      <div
        dangerouslySetInnerHTML={{
          __html: queryData.allFile.edges[0].node.childMarkdownRemark.html,
        }}
      ></div>
    </section>
  )
}

const StyledMoreThanWords = styled(MoreThanWords)``

export default StyledMoreThanWords
