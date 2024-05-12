import rectangle from '../../assets/Rectangle 13.png'

import { useTranslation } from 'react-i18next';


function Blog() {

    const { t } = useTranslation('page')

    return ( 
        <div id='blog'  className='w-full bg-black pt-32 pb-16'>
            <h1 className="text-[#80E1FF] font-normal text-8xl ml-32">
                BLOG
            </h1>

            <div className="grid grid-cols-3 gap-20 mx-48 mt-24">
                <div className="w-[310px] bg-[#D9D9D9] rounded-2xl">
                    <img src={rectangle} className='rounded-bl-2xl rounded-br-2xl' />

                    <div className='mx-9 text-center mt-3'>
                        <h3 className='font-semibold text-xl'>{t('page.title')}</h3>
                        <p className='break-words'>aosjvjaposvijjjjjjjjjjjvjasoihdvasndlkvnassafdbnsmngfhxm,,yi....................ytddddddeyhqaewuaerjf,.....</p>
                    </div>
                </div>
                <div className="w-[310px] bg-[#D9D9D9] rounded-2xl">
                    <img src={rectangle} className='rounded-bl-2xl rounded-br-2xl' />

                    <div className='mx-9 text-center mt-3'>
                        <h3 className='font-semibold text-xl'>{t('page.title')}</h3>
                        <p className='break-words'>aosjvjaposvijjjjjjjjjjjvjasoihdvasndlkvnassafdbnsmngfhxm,,yi....................ytddddddeyhqaewuaerjf,.....</p>
                    </div>
                </div>
                <div className="w-[310px] bg-[#D9D9D9] rounded-2xl">
                    <img src={rectangle} className='rounded-bl-2xl rounded-br-2xl' />

                    <div className='mx-9 text-center mt-3'>
                        <h3 className='font-semibold text-xl'>{t('page.title')}</h3>
                        <p className='break-words'>aosjvjaposvijjjjjjjjjjjvjasoihdvasndlkvnassafdbnsmngfhxm,,yi....................ytddddddeyhqaewuaerjf,.....</p>
                    </div>
                </div>

                
            </div>

            <div className='text-center'>
                <button className='text-black bg-[#80E1FF] rounded-md px-10 py-2 mt-10'>{t('page.more')}</button>
            </div>
        </div>
     );
}

export default Blog;