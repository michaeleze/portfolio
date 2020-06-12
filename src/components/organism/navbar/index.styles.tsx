import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        background: 'white',
        display: 'flex',
        position: 'sticky',
        top: 0,
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 1s cubic-bezier(.32,2,.55,.27)',
        padding: '1rem',
    },
    footer: {
        textAlign: 'center'
    },
    navFooter: {
        flexBasis: '30%',
        margin: '0 auto'
    },
    navLink: {
        textDecoration: 'none',
    },
    navMenu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '4rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        flexBasis: '80%',
        transition: 'all 1s cubic-bezier(.32,2,.55,.27)',
    },
    socialMedia: {
        padding: 'none'
    },
    socialMediaIcon: {
        fontSize: '3rem',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        margin: '0 3rem',
        transition: 'all 1s cubic-bezier(.32,2,.55,.27)',
    }
}))