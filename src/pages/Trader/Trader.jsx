
import { useTranslation } from 'react-i18next';

function Trader() {

    const { t } = useTranslation()

    return ( 
        <div id="trader" className="h-[800px] pt-32 pb-16 bg-gradient-to-b from-[#DBFFE3] from-0% via-[#D5FDE5] via-30% to-[#80E1FF] to-100%">
            <h1 className="text-black font-normal text-8xl ml-32 w-96 text-balance">
                {t('header.trader')}
            </h1>
        </div>
     );
}

export default Trader;