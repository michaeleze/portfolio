import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './index.styles';
import { IRoutes } from '../../../routes/routes';
import NavBarFooter, { ISocialMedia } from '../../molecules/navbar-footer';

interface INavbar {
  footer?: string;
  handleCloseMenu?: () => void;
  openMenu?: any;
  routes?: Array<IRoutes>;
  socialMedia?: Array<ISocialMedia>;
  text?: string;
}

const NavBarMenu: React.FC<INavbar> = (props) => {
  const {
    handleCloseMenu,
    openMenu,
    routes,
    socialMedia,
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
                    <div key={name} className={classes.linkContainer}>
                      <NavLink
                        exact
                        activeClassName={classes.active}
                        className={classes.navLink}
                        onClick={handleCloseMenu}
                        to={path}
                      >
                        {name}
                      </NavLink>
                    </div>
                  ))
                }
              </div>
              <NavBarFooter socialMedia={socialMedia} text={text} />
            </div>
          </>
        )
  );
};

export default NavBarMenu;
