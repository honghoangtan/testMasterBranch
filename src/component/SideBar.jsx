import React from 'react'
import SmallCalender from './SmallCalender'
import Label from './Label'

const SideBar = () => {
  return (
    <div className='border p-5 w-full  md:w-64 bg-calendercolor md:bg-white h-full'>
        <SmallCalender />
        <Label />
    </div>
  )
}

export default SideBar
