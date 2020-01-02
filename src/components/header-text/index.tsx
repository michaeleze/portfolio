import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface IHeaderText {
    textStrokeColor?: string;
    text?: string;
};

const useStyles = makeStyles(theme => ({
    headerText: {
        display: 'flex',
        fontSize: '22vw',
        fontFamily: '"Open Sans", sans-serif',
        left: '0',
        lineHeight: '.1vh',
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        textTransform: 'uppercase',
        textAlign: 'center',
        WebkitTextFillColor: 'transparent',
        WebkitTextStrokeWidth: '3px',
        WebkitTextStrokeColor: '#ffdd00',
        zIndex: 1,
    }
}));

const HeaderText = (props: IHeaderText) => {
    const { text = "MICHAEL", textStrokeColor } = props;
    const classes = useStyles();

    return (
        <Typography
            className={classes.headerText}
            component="h1"
            style={{ WebkitTextStrokeColor: textStrokeColor }}
            variant="h1"
        >
            <span>{text}</span>
            <span>.</span>
        </Typography>
    );
};

export default HeaderText;
