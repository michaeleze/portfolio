import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

interface IHeader {
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    },
    columnTwo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    }
}));

const Header: React.FC<IHeader> = (props) => {
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
                xs={12}
                style={{ background: columnOneBackground }}
            />
            <Grid
                item
                className={classes.columnTwo}
                children={columnTwoContent}
                md={6}
                xs={12}
                style={{ background: columnTwoBackground }}
            />
        </Grid>
    );
};

export default Header;
