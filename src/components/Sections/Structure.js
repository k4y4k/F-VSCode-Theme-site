import React from 'react'
import styled from 'styled-components'

const Structure = ({ className, children }) => {
  return (
    <section className='p-10'>
      <h2 className='text-3xl text-storyteller font-display inline-block'>
        Need structure?
      </h2>
      <br />
      <h3 className='font-display inline-block text-xl mb-3 text-storyteller'>
        We got you.
      </h3>
      <p>
        Headings are visually distinct from one another, up to four levels deep.
        You're looking at them now.
      </p>

      <p>Things to do?</p>
      <ul>
        <li>- [x] Eat</li>
        <li>- [x] Sleep</li>
        <li>- [x] Write</li>
        <li>- [ ] Repeat</li>
      </ul>
    </section>
  )
}

const StyledStructure = styled(Structure)``

export default StyledStructure
