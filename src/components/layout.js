import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col font-sans min-h-screen text-gray-100 bg-grandmaster'>
      <main className='flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full'>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
