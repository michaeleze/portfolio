import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface IHeaderText {
    textStrokeColor?: string;
    text?: string;
};

const useStyles = makeStyles(theme => ({
    headerText: {
        display: 'flex',
        fontSize: '22vw',
        fontFamily: '"Open Sans", sans-serif',
        justifyContent: 'center',
        left: '0',
        lineHeight: '.1vh',
        margin: 'auto',
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

const HeaderText: React.FC<IHeaderText> = (props) => {
    const { text = "MICHAEL", textStrokeColor } = props;
    const classes = useStyles();

    return (
        <h1
            className={classes.headerText}
            style={{ WebkitTextStrokeColor: textStrokeColor }}
        >
            <span>{text}</span>
            <span>.</span>
        </h1>
    );
};

export default HeaderText;
