import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface IHeaderText {
    text?: string;
};

const useStyles = makeStyles(theme => ({
    headerText: {
        display: 'flex',
        fontSize: '22vw',
        color: 'transparent',
        left: '0',
        lineHeight: '.1vh',
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        textTransform: 'uppercase',
        textAlign: 'center',
        textFillColor: 'transparent',
        textStrokeWidth: '1px',
        textStrokeColor: '#fff',
        zIndex: 1,
    }
}));

const HeaderText = (props: IHeaderText) => {
    const { text = "MICHAEL" } = props;
    const classes = useStyles();

    return (
        <Typography className={classes.headerText} variant="h1" component="h1">
            {text}
        </Typography>
    );
};

export default HeaderText;
