import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaGithub, FaInstagram, FaLinkedin, FaXing,
} from 'react-icons/all';
import { useStyles } from './index.styles';
import { Routes, IRoutes } from '../../../routes';
import NavBarFooter from '../navbar-footer';

const mockSocialMediaItems = [
  {
    link: 'https://linkedin.com/in/michaeleze',
    icon: <FaLinkedin />,
  },
  {
    link: 'https://instagram.com/michaelcityboy',
    icon: <FaInstagram />,
  },
  {
    link: 'https://xing.com/michaeleze',
    icon: <FaXing />,
  },
  {
    link: 'https://github.com/michaeleze',
    icon: <FaGithub />,
  },
];

interface INavbar {
  footer?: string;
  handleItemClick?: () => void;
  openMenu?: any;
  routes?: Array<IRoutes>;
  text?: string;
}

const NavBarMenu: React.FC<INavbar> = (props) => {
  const {
    handleItemClick,
    openMenu,
    routes = Routes,
    text = 'DESIGNED BY MICHAELEZE',
  } = props;

  const classes = useStyles();

  return (
    openMenu
        && (
          <>
            <div className={classes.container}>
              <div className={classes.navMenu}>
                {
                  routes?.map(({ name, path }: IRoutes) => (
                    <div key={name}>
                      <NavLink
                        exact
                        activeClassName={classes.active}
                        className={classes.navLink}
                        onClick={handleItemClick}
                        to={path}
                      >
                        {name}
                      </NavLink>
                    </div>
                  ))
                }
              </div>
              <NavBarFooter socialMedia={mockSocialMediaItems} text="DESIGNED BY MICHAELEZE" />
            </div>
          </>
        )
  );
};

export default NavBarMenu;
