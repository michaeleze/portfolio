// Component Will Be Refactored to Functional Component

import React, { Component, SyntheticEvent } from 'react';
import { NavLink } from "react-router-dom";
import './index.css';

class NavBar extends Component {
    state = {
        open: false,
        hamburger: "&#9776;",
        navbarWhite: '',
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            window.scrollY > 0 && this.setState({ navbarWhite: 'white' });
            window.scrollY === 0 && this.setState({ navbarWhite: '' });
        })

    }

    openNav = (event: SyntheticEvent) => {
        event.preventDefault();
        this.setState({ open: !this.state.open });
    }

    render() {
        const { open, navbarWhite } = this.state;

        return (
            <div className='fm-navbar-menu'>
                <div className={open ? 'bg-white' : ''}>
                    <div className={`fm-navbar-body ${navbarWhite}`}>
                        <div className='logo'>
                            <div className={open ? 'txt-black' : ''}>
                                <NavLink className='logoText' to='/'>
                                    <span> MICHAEL</span>
                                    <span className='dotText'> . </span>
                                    <hr className="textRuler"/>
                                </NavLink>
                            </div>
                            <div className='nav-lg'>
                                <div className='item'>
                                    <NavLink exact={true} activeClassName='is-active' to='/about'> ABOUT </NavLink>
                                    <NavLink activeClassName='is-active' to='/work'> WORK </NavLink>
                                    <NavLink activeClassName='is-active' to='/contact'> CONTACT </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='fm-navbar-nav'>
                            <div className='bt-menu' onClick={this.openNav}>&#9776;
                            </div>
                            {open &&
                                <>
                                    <div className='nav'>
                                        <NavLink exact={true} activeClassName='is-active' to='/about'> ABOUT </NavLink>
                                        <NavLink activeClassName='is-active' to='/work'> WORK </NavLink>
                                        <NavLink activeClassName='is-active' to='/contact'> CONTACT </NavLink>
                                    </div>
                                    <div className='fm-navbar-social'>
                                        <ul>
                                            <li><b>Instagram</b></li>
                                            <li><b>Facebook</b></li>
                                            <li><b>Twitter</b></li>
                                        </ul>
                                    </div>
                                </>
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NavBar