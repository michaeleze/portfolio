// Component Will Be Refactored to Functional Component

import React, { Component, SyntheticEvent } from 'react';
import { NavLink } from "react-router-dom";
import { routes, IRoutes } from '../../routes';
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

    navRoutes = routes.splice(1);

    render() {
        const { open, navbarWhite } = this.state;

        return (
            <div className='fm-navbar-menu'>
                <div className={open ? 'bg-white' : ''}>
                    <div className={`fm-navbar-body ${navbarWhite}`}>
                        <div className='logo'>
                            <div className={open ? 'txt-black' : ''}>
                                <NavLink className='logoText' to='/'>
                                    <b> Michael</b>
                                    <b className='dotText'>.</b>
                                </NavLink>
                            </div>
                            <div className='nav-lg'>
                                <div className='item'>
                                    {
                                        this.navRoutes.map(({ name, path }: IRoutes) => (
                                            <NavLink
                                                activeClassName='is-active'
                                                exact={true}
                                                key={name}
                                                to={path}
                                            >
                                                {name}
                                            </NavLink>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='fm-navbar-nav'>
                            <div className='bt-menu' onClick={this.openNav}>&#9776;
                            </div>
                            {open &&
                                <>
                                    <div className='nav'>
                                        {
                                            this.navRoutes.map(({ name, path }: IRoutes) => (
                                                <NavLink
                                                    activeClassName='is-active'
                                                    exact={true}
                                                    key={name}
                                                    to={path}
                                                >
                                                    {name}
                                                </NavLink>
                                            ))
                                        }
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