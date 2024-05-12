
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation()

    return ( 
        <div id="contacts" className='w-full bg-black pt-32 pb-16'>
            <h1 className="text-[#80E1FF] font-normal text-8xl ml-32">
                {t('header.contact')}
            </h1>
        </div>
     );
}

export default Contact;