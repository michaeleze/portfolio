import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ImageBanner from '../../img/bg_1.jpg';
import HeaderText from '../header-text';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
    },
    secondHalf: {
        backgroundColor: '#282c34',
        flexGrow: 1,
    },
}));

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container component="section" className={classes.container}>
            <Grid item sm={6}>

                <img src={ImageBanner} className="App-logo" alt="logo" />
            </Grid>
            <Grid item className={classes.secondHalf} sm={6}></Grid>
            <HeaderText />
        </Grid>
    );
};

export default Header;
