import React from 'react'
import Content from './Content'

const Main = ({ children }) => {
  return (
    <div className='text-gray-300 bg-gray-200 dark:bg-gray-800'>
        { children }
    </div>
  )
}

export default Main
