import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/sidebar'
class Contact
 extends Component {
  render () {
    return (
     <div>
       <Sidebar />
        <section className='wrapper'>
          <div className='row'>
            <div className='medium-8 columns medium-centered'>
              <div className='wrapper_istance'>
                <h2 className='wrapper_title'>Contact us</h2>
                <p className='tagline'>Write us at  info@bankofthecommons.coop</p>
            </div>
            </div>

          </div>
        </section>
     </div>
    )
  }
}

export default Contact
