import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/sidebar'

class Membership extends Component {
  render () {
    return (
     <div>
       <Sidebar />
        <section className='wrapper'>
          <div className='row'>
            <div className='medium-8 columns medium-centered'>
              <div className='wrapper_istance'>
                <h2 className='wrapper_title'>Membership</h2>
                <div className='wrapper_member'>
                <span>Consumer limited member</span> <p>1 € = 1 share</p> 
                It is a system that lets anyone open an account freely. <br />
                Fees could be added when there is the need.  <br/>
                </div>
                <div className='wrapper_member'>
                <span>Individual full member </span> 
                <p>100 € = 100 consumer shares</p>
                No fees paid by the cooperative bank only from third parties when they are.<br />
                </div>
                <div className='wrapper_member'>
                <span>Collective full member</span> 
                <p>200 € = 200 shares </p> 
                No fees either when changing to euros.
                </div>
                <div className='wrapper_member'>
                <span>Founder and Investor member</span> 
                <p>1000 € = 1000 shares</p> No fees <br />
                <b>You can become a co-founder by joining before 30 of may.</b>
                </div>
            </div>
            </div>

          </div>
        </section>
     </div>
    )
  }
}

export default Membership
