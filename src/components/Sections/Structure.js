import React from 'react'
import styled from 'styled-components'

const Structure = ({ className, children }) => {
  return (
    <section className='p-10'>
      <h2 className='text-3xl italic text-storyteller font-display inline-block'>
        Need structure?
      </h2>
      <br />
      <h3 className='font-display inline-block text-xl mb-3 text-storyteller'>
        We got you.
      </h3>
      <p className='my-4'>
        Headings are visually distinct from one another, up to four levels deep.
        You're looking at them now.
      </p>

      <p className='my-4'>Things to do?</p>

      <ul>
        <li>
          - [<span className='text-forgemaster'>x</span>] Eat
        </li>
        <li>
          - [<span className='text-forgemaster'>x</span>] Sleep
        </li>
        <li>
          - [<span className='text-forgemaster'>x</span>] Write
        </li>
        <li>- [ ] Repeat</li>
      </ul>
    </section>
  )
}

const StyledStructure = styled(Structure)``

export default StyledStructure
