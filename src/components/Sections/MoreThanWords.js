import React from 'react'
import styled from 'styled-components'

const MoreThanWords = ({ className, children }) => {
  return (
    <section className='border border-storyteller p-10'>
      <h2 className='text-2xl font-display'>Writing more than words?</h2>
      <h3 className='font-display'>Awesome.</h3>

      <p>
        It's not just headings and asterisks that get the star treatment here.
      </p>

      <p>
        F makes sure that <span>comments don't get in your way.</span> Sharing
        examples? See <pre>inline code blocks</pre> clearly.
      </p>

      <p>Writing small novels of code? We got you.</p>

      <pre>
        <code>
          {`      
function fTheme(){
if (youUseF && youWriteCodeBlocks) {
itsEasyToTellWhatsWhat = true
visuallyDifferent = true
awesomePercentage = 100
}
}
`}
        </code>
      </pre>
    </section>
  )
}

const StyledMoreThanWords = styled(MoreThanWords)``

export default StyledMoreThanWords
