import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { routes, IRoutes } from '../../routes';

interface INavBar {
    columnOneBackground?: string;
    columnTwoBackground?: string;
    columnOneContent?: string | ReactElement;
    columnTwoContent?: string | ReactElement;
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '15px',
        paddingTop: '15px',
        position: 'fixed',
        width: '20%',
        zIndex: 2,
    },
    navLink: {
        color: '#ffdd00',
        textDecoration: 'none',
    }
}));

const NavBar: React.FC<INavBar> = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {
                routes.map(({ name, path }: IRoutes) => (
                    <div key={name}><NavLink className={classes.navLink} to={path}>{name}</NavLink></div>
                ))
            }
        </div>
    );
};

export default NavBar;
