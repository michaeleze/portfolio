import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './index.styles';
import { Routes, IRoutes } from '../../../routes';
import Footer, { ISocialMedia } from "../../molecule/navbar-footer";
import {FaGithub, FaInstagram, FaLinkedin, FaXing} from "react-icons/all";

interface INavbar {
    footer?: string;
    handleItemClick?: () => void;
    socialMedia?: Array<ISocialMedia>;
    openMenu?: any;
    routes?: Array<IRoutes>;
}

const mockSocialMediaItems = [
    { link: 'https://linkedin.com/in/michaeleze', icon: <FaLinkedin /> },
    { link: 'https://instagram.com/michaelcityboy', icon: <FaInstagram /> },
    { link: 'https://xing.com/michaeleze', icon: <FaXing /> },
    { link: 'https://github.com/michaeleze', icon: <FaGithub /> }
];

const NavBar: React.FC<INavbar> = (props) => {
    const {
        footer = 'DESIGNED BY MICHAELEZE',
        handleItemClick,
        socialMedia = mockSocialMediaItems,
        openMenu,
        routes = Routes,
    } = props;

    const classes = useStyles();

    return (
        openMenu &&
            <div className={classes.container}>
            <div className={classes.navMenu}>
            {
                routes && routes.map(({ name, path }: IRoutes) => (
                    <div key={name}>
                    <NavLink
                        activeClassName={classes.active}
                        className={classes.navLink}
                        exact={true}
                        onClick={handleItemClick}
                        to={path}
                    >
                        {name}
                    </NavLink>
                    </div>
                ))
            }
            </div>
                <Footer footer={footer} socialMedia={socialMedia} />
            </div>
    );
};

export default NavBar;
