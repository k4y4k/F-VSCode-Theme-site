import React from 'react'
import styled from 'styled-components'

const Download = ({ className, children }) => {
  return (
    <section className='p-10'>
      <h2 className='text-3xl italic text-storyteller font-display inline-block'>
        Go on, give it a try!
      </h2>
      <br />
      <h3 className='font-display inline-block text-xl mb-3 text-storyteller'>
        You might just fall in love.
      </h3>

      <p className='my-4'>
        Available for the only Electron-based code editor worth downloading,
        Visual Studio Code.
      </p>
      <p className='my-4'>
        <sub>
          You didn't think I was going to say Atom or Brackets, did you?
        </sub>
      </p>

      <button>get it</button>
    </section>
  )
}

const StyledDownload = styled(Download)``

export default StyledDownload
