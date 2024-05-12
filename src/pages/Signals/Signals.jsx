
import { useTranslation } from 'react-i18next';


function Signals() {

    const { t } = useTranslation()

    return ( 
        <div id="signal" className="pt-32 pb-16 bg-gradient-to-b from-[#fff] from-90%  to-[#DBFFE3]">
            <h1 className="text-[#80E1FF] font-normal text-8xl ml-32">
                {t('header.signals')}
            </h1>
        </div>
     );
}

export default Signals;