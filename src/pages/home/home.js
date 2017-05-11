import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/sidebar'

class Home extends Component {
  render () {
    return (
     <div>
       <Sidebar />
        <section className='wrapper'>
          <div className='row'>
            <div className='medium-8 columns medium-centered'>
              <div className='wrapper_istance'>
                <h2 className='wrapper_title'>The vision</h2>
                <p>Banking and payment technologies are improving rapidly. <br />
                Ethical banking cooperatives and democratically run alternative currencies have the challenge of improving ease of use for participants whilst staying true to their values.<br />
                Cooperative and solidarity economies need to spread beyond activist circles by making themselves more attractive and usable in everyday life in practical ways. <br />
                At same time, the decentralized tools that are a part of the blockchain revolution make it possible to decentralize banking and make it more transparent, and these capacities can be used to recover popular sovereignty in finances, participative budgeting and money creation. <br />
                In order to make these big improvements happen it is very important to create economies of scale so that we can build shared technologies, integrations and services that any local financial cooperative or currency project can use. This is what this European cooperative banking project is about. </p>
                <div className='list'>
                  These are some basic project goals:
                  <ul>
                    <li>Payment systems without corporate intermediation, between all subjects of the cooperative and solidarity economy.</li>
                    <li>To provide decentralised technologies to the ethical banking and alternative currencies movements.                  </li>
                    <li>To interconnect ethical banking and alternatives currencies movements with practical applications that simplify their exchanges.</li>
                    <li>To foster ethical banking and payment possibilities to any part of Europe, and progressively the world.</li>
                    <li>To reelaborate the meaning of money creation, solving the problems that typically affect cooperativist investments(These are characterised by a lack of profit, difficulty with exit strategies and member's rights leading people to prefer private startups); and creating awareness about how money creation works and how it can be changed.</li>
                  </ul>
                  The bank's plan involves some tools that already exist and some that are currently under development. These include faircoin, fairpay, and the freecoin complementary currencies toolkit amongst others.
                </div>
              </div>
            </div>
          </div>
        </section>
     </div>
    )
  }
}

export default Home
