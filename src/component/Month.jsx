import React from 'react'
import Day from './Day'

const Month = ({ month }) => {   
      return (
        <div className='w-full'>
            <div className='flex-1 grid grid-cols-7 grid-rows-5 bg-calendercolor md:bg-white h-full'>
                {
                    month.map((row, indexRow) => (
                        <React.Fragment key={indexRow}>
                            {
                                row.map((day, index) => (
                                    <Day key={index} day={day} indexRow ={indexRow}/>
                                ))
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
  )
}

export default Month
