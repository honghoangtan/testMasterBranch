import React from 'react'

const Content = ({ children }) => {
  return (
    <div className='flex-1 flex flex-col gap-5 p-4 sm:ml-64'>
        {children}
    </div>
  )
}

export default Content
