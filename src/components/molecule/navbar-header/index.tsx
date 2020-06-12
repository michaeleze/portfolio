import React from 'react';
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
        title = 'michaeleze.co',
    } = props;
    const classes = useStyles();

    const buttonMenu = openMenu ? classes.lineCross : classes.lineOpen;

    return (
        <header className={classes.container}>
                <div className={classes.box}>
                    <div className={classes.title}>
                        {title}
                    </div>
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
