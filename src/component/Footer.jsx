
import { FOOTER_CONTACT_INFOR, FOOTER_LINK } from '../constant/Constant'
import FooterColumn from './FooterColumn'

const Footer = () => {
  return (
    <div className='bg-white text-black flex flex-col items-center justify-center pt-20'>
        <div className='container mx-auto flex flex-col items-center justify-center'>
            <div className='flex flex-col md:flex-row items-start justify-center gap-[10%]'>

                <div className='flex flex-col sm:flex-row gap-8 sm:justify-between md:flex-1'> 
                    <div className='flex flex-col gap-5'>
                        <FooterColumn image={FOOTER_CONTACT_INFOR.image} email={FOOTER_CONTACT_INFOR.email} title={FOOTER_CONTACT_INFOR.title}>
                            <div className='flex flex-col'>
                                {
                                    FOOTER_CONTACT_INFOR.links.map((item, index) => {
                                        return (
                                            <p key={index} className='font-medium'>{item}</p>
                                        )
                                    })
                                }            
                            </div>
                        </FooterColumn>

                    </div>


                    {
                        FOOTER_LINK.map((item, index) => {

                            return (
                                <FooterColumn key={index} title={item.title}>
                                    <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                                                {
                                                    item.links.map((item, index) => {
                                                        return (
                                                            <a to={'/'} key={index}>{item}</a>
                                                        )
                                                    })
                                                }
                                            </ul>
                                </FooterColumn>
                            )
                        })
                    }
                </div>
            </div>

            
        </div>

        <div className='text-center regular-14 bg-black w-full mt-24 py-3'>
            <p className='text-white'>
                    2024 Shoppee | All rights reserved.
                </p>
        </div>
    </div>
  )
}

export default Footer
