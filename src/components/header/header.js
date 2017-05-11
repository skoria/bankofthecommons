import React, {Component} from 'react'

class Header extends Component {
    constructor () {
        super()
        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.state = {
            action: false
        }
    }
    toggleDropdown (e) {
        this.setState({
            action: !this.state.action
        })
    }
    render () {
        console.log(this.state.action)
        return (
            <header id='main_header'>
               <div className='header_logo'></div>
                <div className='header_menu'>
                    <div className='menu_search'>
                        <span className='search_label'>All</span>
                        <input className='search input' placeholder='Search' />
                    </div>
                </div>
                <span className='menu_market'><i className='icon-shop'></i>Market</span>
                <div className='header_right'>
                    <div className='right_notification'>
                        <span className='icon-bell'></span> <o>4</o>
                        <span className='icon-plus' onClick={()=>this.toggleDropdown('action')}></span>
                        <div className={this.state.action ? 'notification_dropdown active' : 'notification_dropdown'}>
                            <ul className='dropdown_list'>
                                <li className='list_item'>
                                    Add Contract
                                </li>
                                <li className='list_item'>
                                    Make Topup
                                </li>
                                <li className='list_item'>
                                    Add Context
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='header_profile'>
                        <div className='profile_picture'>
                            <div className='picture_photo'></div>
                            <div className='profile_socket'>
                                <div className={this.props.connectionStatus + ' socket_status'}></div>
                            </div>
                            <span onClick={() => {this.props.reconnect('ws://' + this.props.user.ip + ':8090')}} className={this.props.connectionStatus === 'Disconnected' ? 'active icon-ccw' : 'icon-ccw'}></span>
                        </div>
                        <span className='icon-dots-three-vertical'></span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header