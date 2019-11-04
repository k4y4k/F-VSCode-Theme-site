import React from 'react'
import styled from 'styled-components'

const GotMarkdown = ({ className, children }) => {
  return (
    <section className='border border-storyteller p-10'>
      <h2 className='text-2xl font-display'>Got Markdown?</h2>
      <h3 className='font-display'>Excellent.</h3>
      <p>
        F makes editing Markdown files a <strong>breeze.</strong> More
        importantly, F makes markup <em>easy to understand.</em>
      </p>
    </section>
  )
}

const StyledGotMarkdown = styled(GotMarkdown)``

export default StyledGotMarkdown
