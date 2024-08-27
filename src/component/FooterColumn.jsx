import React from 'react'

const FooterColumn = ({ image, email, title, children }) => {
  return (
    <div className={`flex flex-col gap-5 ${image ? '-mt-2' : ''}`}>
            {
                image && email &&
                <div className='flex items-center gap-3 font-semibold'>
                    <img src={image} width={56} height={56} className='rounded-full'/>
                    <h4 className="bold-18 whitespace-nowrap h3">{title}</h4>
                </div>
            }

            {
                !image && !email &&
                <h4 className="bold-18 whitespace-nowrap">{title}</h4>  
            }
            {children}

            {
                email &&
                <span className='underline font-medium'>{email}</span>
            }
    </div>  
  )
}

export default FooterColumn
