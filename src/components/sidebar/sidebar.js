import React, {Component} from 'react'
import {Link} from 'react-router'

class Sidebar extends Component {
  render () {
    return (
      <aside className='sidebar'>
          <span>bank <br />of the <br />commons</span>
          <ul className='sidebar_menu'>
            <li className='menu_item'><Link to='/' activeClassName='active'>Vision</Link></li>
            <li className='menu_item'><Link to='/roadmap' activeClassName='active'>Roadmap</Link></li>
            <li className='menu_item'><Link to='/membership' activeClassName='active'>Membership</Link></li>
            <li className='menu_item'><Link to='/contact' activeClassName='active'>Contact us</Link></li>
            <li className='menu_item'><Link to='http://es.bankofthecommons.coop/' activeClassName='active'>Español</Link></li>
          </ul>
        </aside>
    )
  }
}

export default Sidebar
