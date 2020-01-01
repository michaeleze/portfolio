import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        '&::after': {
            content: '"MICHAEL"',
            display: 'flex',
            fontSize: '8em',
            color: theme.palette.text.secondary,
            left: '0',
            lineHeight: '.1vh',
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            textTransform: 'uppercase',
        }
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
            </Grid>
            <Grid item className={classes.secondHalf} sm={6}></Grid>
        </Grid>
    );
};

export default Header;
