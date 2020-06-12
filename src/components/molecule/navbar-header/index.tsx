import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './index.styles';

interface NavBarHeader {
    menu?: string;
    onClick?: () => void;
    openMenu?: boolean;
    title?: string;
}

const NavBarHeader: React.FC<NavBarHeader> = (props) => {
    const {
        menu = 'MENU',
        onClick: handleOpenMenu,
        openMenu,
        title = 'MICHAELEZE.CO',
    } = props;
    const classes = useStyles();

    const buttonMenu = openMenu ? classes.lineCross : classes.lineOpen;

    return (
        <header className={classes.container}>
                <div className={classes.box}>
                    <Link className={classes.title} to='/'>
                        {title}
                    </Link>
                    <button className={classes.button} onClick={handleOpenMenu}>
                        <span className={classes.menu}>{menu}</span>
                        <span className={classes.hamburger}>
                            <div className={buttonMenu}></div>
                            <div className={buttonMenu}></div>
                        </span>
                    </button>
                </div>
        </header>
    );
};

export default NavBarHeader;
