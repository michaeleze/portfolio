import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

interface INavBar {
    columnOneBackground?: string;
    columnTwoBackground?: string;
    columnOneContent?: string | ReactElement;
    columnTwoContent?: string | ReactElement;
}

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        position: 'relative',
    },
    columnOne: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    },
    columnTwo: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    }
}));

const NavBar: React.FC<INavBar> = (props) => {
    const {
        columnOneBackground = '#ff006d',
        columnTwoBackground = '#282c34',
        columnOneContent,
        columnTwoContent,
    } = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid
                item
                className={classes.columnOne}
                children={columnOneContent}
                md={6}
                style={{ background: columnOneBackground, backgroundSize: 'contain'}}
                xs={12}
            />
            <Grid
                item
                className={classes.columnTwo}
                children={columnTwoContent}
                md={6}
                style={{ background: columnTwoBackground, backgroundSize: 'cover' }}
                xs={12}
            />
        </Grid>
    );
};

export default NavBar;
