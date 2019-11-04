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
      <p className='my-4'>
        F makes editing Markdown files a <strong>breeze.</strong> More
        importantly, F makes markup <em>easy to understand,</em> which helps
        with understanding prose at a glance.
      </p>
      <p className='my-4'>
        Markdown was created to be simple and publishable as-is; F{' '}
        <em>stays out of your way</em> while you read and write.
      </p>
      <p className='my-4'>
        No matter whether you're reading READMEs or chipping away at your magnum
        opus, F is there to help you get down with the markup.
      </p>
    </section>
  )
}

const StyledGotMarkdown = styled(GotMarkdown)``

export default StyledGotMarkdown
