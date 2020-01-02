import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    animatedBackground: {
        backgroundColor: '#ff006d',
    },
    container: {
        minHeight: '100vh',
        position: 'relative',
    },
    staticBackground: {
        backgroundColor: '#282c34',
        flexGrow: 1,
    },
}));

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item className={classes.animatedBackground} sm={6}></Grid>
            <Grid item className={classes.staticBackground} sm={6}></Grid>
        </Grid>
    );
};

export default Header;
