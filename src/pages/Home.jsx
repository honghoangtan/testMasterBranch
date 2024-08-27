import Header from '../component/Header'
import Hero from '../component/Hero'
import DemoDashboar from '../component/DemoDashboar'

import Investment from '../component/Investment'

import SuitTable from '../component/SuitTable'
import DownApp from '../component/DownApp'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className='text-white'>
        <Header />

        <Hero />

        <DemoDashboar />

        <Investment/>

        <SuitTable />

        <DownApp />

        <Footer />
    </div>
  )
}

export default Home
