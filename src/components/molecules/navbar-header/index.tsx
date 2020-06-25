import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './index.styles';

interface NavBarHeader {
  menu?: string;
  handleCloseMenu?: () => void;
  handleOpenMenu?: () => void;
  openMenu?: boolean;
  title?: string;
}

const NavBarHeader: React.FC<NavBarHeader> = (props) => {
  const {
    menu = 'Menu',
    handleCloseMenu,
    handleOpenMenu,
    openMenu,
    title = 'MICHAELEZE.CO',
  } = props;
  const classes = useStyles();

  const buttonMenu = openMenu ? classes.lineCross : classes.lineOpen;

  return (
    <div className={`${classes.container} ${openMenu && classes.whiteBackground}`}>
      <div className={classes.box}>
        <div className={classes.title}>
          <Link className={classes.text} onClick={handleCloseMenu} to="/">
            {title}
          </Link>
        </div>
        <button className={classes.button} onClick={handleOpenMenu}>
          <span className={classes.menu}>{menu}</span>
          <span className={classes.hamburger}>
            <div className={buttonMenu} />
            <div className={buttonMenu} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavBarHeader;
