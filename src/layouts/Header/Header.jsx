


import { useState } from 'react';
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'


// import Signals from '../../pages/Signals/Signals';

// import { Link } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

import { useTranslation } from 'react-i18next';

function Header() {

    const {t, i18n} = useTranslation()

    const changLang = (lang) => {
        i18n.changeLanguage(lang)
    }

    const [isHoverd, setIsHovered] = useState(false)
    const [active, setActive] = useState('vi')

    const buttonChange = (lang) => {

        setActive(lang)
        changLang(lang)
    }

    return ( 
        <div className="w-full h-36 bg-black px-14 text-white flex items-center justify-between fixed z-10 ">
            <div className=''>
                <a className="cursor-pointer" href='#'>
                    <img
                        src={isHoverd ? logo2 : logo1}
                        alt="Image"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="w-full h-full transition duration-0 ease-in-out hover:duration-300"
                    />
                </a>    
            </div>

            <div className='flex '>
                <div className='flex gap-8 text-[#80E1FF]'>
                    <a className='hover:text-white hover:scale-125 transition duration-300 ease-in-out font-normal text-xl'>
                        <HashLink smooth to="#about">{t('header.about_us')}</HashLink>
                    </a>
                    <a className='hover:text-white hover:scale-125 transition duration-300 ease-in-out font-normal text-xl'>
                        <HashLink smooth to="#blog">{t('header.blog')}</HashLink>
                    </a>
                    <a className='hover:text-white hover:scale-125 transition duration-300 ease-in-out font-normal text-xl'>
                        <HashLink smooth to="#signal">{t('header.signals')}</HashLink>
                    </a>
                    <a className='hover:text-white hover:scale-125 transition duration-300 ease-in-out font-normal text-xl'>
                        <HashLink smooth to="#trader">{t('header.trader')}</HashLink>
                    </a>
                    <a className='hover:text-white hover:scale-125 transition duration-300 ease-in-out font-normal text-xl'>
                        <HashLink smooth to="#contacts">{t('header.contact')}</HashLink>
                    </a>
                </div>

                <div className='space-x-2 ml-5'>
                    <button className={active === 'vi' ? 'text-[#80e1ff]' : ''} onClick={() => buttonChange('vi')}>vi</button>
                    <button className={active === 'en' ? 'text-[#80e1ff]' : ''} onClick={() => buttonChange('en')}>en</button>
                </div>
            </div>
        </div>

        
     );
}

export default Header;