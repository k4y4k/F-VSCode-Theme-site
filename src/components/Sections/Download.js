import React from 'react'
import styled from 'styled-components'
const fLink = 'https://marketplace.visualstudio.com/items?itemName=k4y4k.f'

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
        Available for the only Electron-based code editor worth downloading, [
        <span className='text-forgemaster'>Visual Studio Code</span>](
        <a href='https://code.visualstudio.com/' className='underline'>
          https://code.visualstudio.com/
        </a>
        ).
      </p>
      <a
        href={fLink}
        className='bg-transparent hover:bg-storyteller text-storyteller font-semibold hover:text-white py-2 px-4 border border-storyteller hover:border-transparent rounded inline-block'
      >
        Download F from the Marketplace
      </a>
    </section>
  )
}

const StyledDownload = styled(Download)``

export default StyledDownload
