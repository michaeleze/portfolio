import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    footer: {
        textAlign: 'center',
    },
    icon: {
        color: 'rgba(34,26,45,0.8)',
        fontSize: '3rem',
        textAlign: 'center',
        textDecoration: 'none',
        margin: '0 3rem',
        transition: 'all 1s ease',

        '&:hover': {
            color: '#FC173E',
        },
    },
    navFooter: {
        flexBasis: '20%',
        margin: '0 auto'
    },
    navLink: {
        textDecoration: 'none',
        transition: 'all 1s ease',

        '&:hover': {
            color: '#FC173E',
        },
    },
    socialMedia: {
        padding: 0,
        textAlign: 'center'
    },
    socialMediaIcon: {
        display: 'inline-block',
    }
}))