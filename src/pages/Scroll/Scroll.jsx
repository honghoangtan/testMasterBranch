

import down from '../../assets/down.png'

// import bg from '../../assets/gnoise.png'

import component2 from '../../assets/component2.png'

import logo1 from '../../assets/slideLogo/figma1.png'
import logo2 from '../../assets/slideLogo/Artboard 53.png'
import logo3 from '../../assets/slideLogo/halffigma1.png'
import logo4 from '../../assets/slideLogo/figma1half.png'

import section from '../../assets/scroll.png'

import { useTranslation } from 'react-i18next';


function Scroll() {
//bg-gradient-to-t from-blue-200 to-black
    const { t } = useTranslation('page')

    return ( 
        <div id='about' className="w-full relative" >

            <div className='flex flex-col items-center justify-center absolute top-0 w-full h-72 bg-black'>
                <p className='text-white font-normal text-base leading-[22px]'>{t('page.scroll')}</p>
                <div>
                    <img src={down} />
                </div>
            </div>

            <div className='bg-gradient-to-b from-[#6b6bc7] from-90%  to-[#DBFFE3] pt-[100px]'>
                <h1 className='font-normal text-8xl leading-[139px] ml-32 pt-48'>{t('page.about_us')}</h1>
                <p className='h-72 w-[840px] ml-52 font-normal text-3xl font-Montserrat'>
                    {t('page.about_text')}
                </p>
            </div>
            
            <div className='overflow-hidden bg-gradient-to-b from-[#DBFFE3] from-0% via-[#D5FDE5] via-30% to-[#80E1FF] to-100%'>
                <div className='flex gap-12 px-5 justify-between  max-md:flex-wrap animate-loop'>
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />

                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />

                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />

                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                    <img src={logo2} loading='lazy' className='shrink-0 my-auto max-w-full aspect-[5.88] w-[259px]' />
                    <img src={logo1} loading='lazy' className='shrink-0 max-w-full aspect-[1.56] w-[228px]' />
                </div>
            </div>
            <div className='absolute w-full h-full top-0 opacity-90' style={{ backgroundImage: `url(${section})`}}></div>
        </div>
     );
}

export default Scroll;