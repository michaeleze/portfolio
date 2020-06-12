import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './index.styles';
import { Routes, IRoutes } from '../../../routes';
import {FaXing, FaLinkedin, FaInstagram, FaGithub} from "react-icons/all";

interface ISocialMedia {
    link: string;
    icon: JSX.Element;
};

interface INavbar {
    footer?: string;
    socialMedia?: Array<ISocialMedia>;
    openMenu?: any;
    routes?: Array<IRoutes>;
}

const socialMediaItems = [
    { link: 'https://linkedin.com/in/michaeleze', icon: <FaLinkedin /> },
    { link: 'https://instagram.com/michaelcityboy', icon: <FaInstagram /> },
    { link: 'https://xing.com/michaeleze', icon: <FaXing /> },
    { link: 'https://github.com/michaeleze', icon: <FaGithub /> }
];

const NavBar: React.FC<INavbar> = (props) => {
    const {
        footer = 'DESIGNED BY MICHAELEZE',
        socialMedia = socialMediaItems,
        openMenu,
        routes = Routes,
    } = props;

    const classes = useStyles();

    return (
        openMenu &&
            <div className={classes.container}>
            <div className={classes.navMenu}>
            {
                routes.map(({ name, path }: IRoutes) => (
                    <NavLink className={classes.navLink} to={path}>
                        <span>{name}</span>
                    </NavLink>
                ))
            }
            </div>
            <div className={classes.navFooter}>
                <ul className={classes.socialMedia}>
                    {
                        socialMedia.map((item) => (
                            <li className={classes.socialMediaIcon} key={item.link}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.icon}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <p className={classes.footer}>{footer}</p>
            </div>
            </div>
    );
};

export default NavBar;
