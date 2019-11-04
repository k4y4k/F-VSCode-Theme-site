import React from 'react'
import styled from 'styled-components'

const GotMarkdown = ({ className, children }) => {
  return (
    <section className='p-10'>
      <h2 className='text-3xl text-storyteller font-display inline-block'>
        Got Markdown?
      </h2>
      <br />
      <h3 className='font-display inline-block text-xl mb-3 text-storyteller'>
        Excellent.
      </h3>
      <p>
        F makes editing Markdown files a <strong>breeze.</strong> More
        importantly, F makes markup <em>easy to understand.</em>
      </p>
    </section>
  )
}

const StyledGotMarkdown = styled(GotMarkdown)``

export default StyledGotMarkdown
