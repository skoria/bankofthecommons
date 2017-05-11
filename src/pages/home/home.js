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
                Ethical banking cooperatives and democratically run alternative currencies have the challenge of changing ease of use while staying true to their values.<br />
                Cooperative and solidarity economies needs to spread beyond activist circles by making themselves more attractive and practically usable in everyday life. <br />
                At same time, decentralized tools that are a part of the blockchain revolution make it possible to decentralize banking and make it more transparent, and these capacities can be used for recovering popular sovereignty in finances, participative budgeting and money creation. <br />
                In order to make these big improvements happen it is very important to create economies of scale so that we can build shared technologies, integrations and services, that any local financial cooperative or currency project can use, and this is what this European banking cooperative project is about. </p>
                <div className='list'>
                  These are some basic goals that this project should achieve:
                  <ul>
                    <li>Payment systems without corporate intermediation, between all subjects of the cooperative and solidarity economy.</li>
                    <li>To provide decentralised technologies to the ethical banking and alternative currencies movements.                  </li>
                    <li>To interconnect the ethical banking and the alternatives currencies movements, with practical applications that simplify their exchanges.</li>
                    <li>To foster ethical banking and payments possibilities to any part of Europe, and progressively the world.</li>
                    <li>To reelaborate the meaning of the money creation, solving the old cooperativist investments problem; and creating awareness about how money creation works and can be changed.</li>
                  </ul>
                  Some already existing tools and some in development are part of the bank's plan. These include faircoin, fairpay, and the freecoin complementary currencies toolkit amongst others.
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