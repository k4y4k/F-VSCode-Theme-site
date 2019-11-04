import React from 'react'
import styled from 'styled-components'

const Download = ({ className, children }) => {
  return (
    <section className='border border-storyteller p-10'>
      <h2 className='text-2xl font-display'>Go on, give it a try!</h2>
      <h3 className='font-display'>You might just fall in love.</h3>

      <p>
        Available for the only Electron-based code editor worth downloading,
        Visual Studio Code.
      </p>
      <p>
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
