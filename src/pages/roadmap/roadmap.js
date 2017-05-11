import React, {Component} from 'react'
import Sidebar from '../../components/sidebar/sidebar'
class Roadmap extends Component {
  render () {
    return (
     <div>
       <Sidebar />
        <section className='wrapper'>
          <div className='row'>
            <div className='medium-8 columns medium-centered'>
              <div className='wrapper_istance'>
                <h2 className='wrapper_title'>The Roadmap</h2>
                <p className='tagline'>Strategical steps to do before summer 2017</p>
                <div className='wrapper_roadmap'>
                    <div className='roadmap_item'><div><h3>Find Co Founders</h3>To get at least 20 cofounders and create a European Cooperative Society in Italy, focused in digital banking&currencies services, with IBAN Bankaccount in Banca Ética.</div></div>
                    <div className='roadmap_item'> <div><h3>Alpha Release</h3>To activate basic structure of management, members support, accountancy, communication.</div></div>
                    <div className='roadmap_item'> <div><h3>crowdequity campaign</h3>To make a crowdequity campaign for getting €500.000 of capital. This will make us able to build the necessary software for covering the needs in short and middle termwhile securing the bank with enough liquidity. (2017 expenses are valued as €90.000)</div></div>
                    <div className='roadmap_item'> <div><h3>Activate Services</h3>To offer the services that already are available (or imminent..) to members (Virtual bank accounts with multicurrency options; Fairpay card and POS system)</div></div>
                    <div className='roadmap_item'> <div><h3>Full payments</h3>To allow payments to cooperatives and non profits using online wallets in faircoins or euros. This does not cover payment of bills to corporations.</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
     </div>
    )
  }
}

export default Roadmap
