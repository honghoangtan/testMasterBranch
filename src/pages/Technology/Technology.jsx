import { useState } from 'react';
import logoTech from '../../assets/section-logo.png'
import logoTech2 from '../../assets/section-logo2.png'

import logoText from '../../assets/text-logo.png'
import logoText2 from '../../assets/text-logo2.png'


function Technology() {
    const [isHoverd, setIsHovered] = useState(false)
    const [isHoverd2, setIsHovered2] = useState(false)


    return ( 
        <div className="w-full bg-black px-[80px] pt-[180px] pb-[100px]">
            <div className='flex'>
                <div className='overflow-hidden transition-all duration-300 ease-in-out transform-gpu'>
                    <img src={isHoverd ? logoTech2 : logoTech} 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>

                <div className='overflow-hidden transition-all duration-300 ease-in-out transform-gpu'>
                    <img src={isHoverd2 ? logoText2 : logoText} 
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    />
                </div>
            </div>

        </div>
     );
}

export default Technology;