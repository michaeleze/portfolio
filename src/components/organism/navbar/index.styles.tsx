import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    active: {
        color: '#FC173E',
        borderBottom: '2px solid #FC173E',
    },
    container: {
        background: 'white',
        display: 'flex',
        position: 'fixed',
        top: 0,
        height: '100vh',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 1s cubic-bezier(0,2,.55,.27)',
        zIndex: 2,
    },
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
    navMenu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '3.5rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        flexBasis: '80%',
        transition: 'all 1s cubic-bezier(0,2,.55,.27)',

        ['@media (max-width: 978px)']: {
            flexDirection: 'column',
            fontSize: '2.5rem',
            padding: '1em 0'

        }
    },
    socialMedia: {
        padding: 0,
        textAlign: 'center'
    },
    socialMediaIcon: {
        display: 'inline-block',
    }
}))