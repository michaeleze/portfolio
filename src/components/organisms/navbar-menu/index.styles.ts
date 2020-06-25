import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  active: {
    color: '#FC173E !important',
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
    transition: 'background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)',
    transitionProperty: 'background-color, backdrop-filter',
    zIndex: 2,
  },

  linkContainer: {
    padding: '0 1em',

    '@media (max-width: 978px)': {
      padding: '.5em',
    },
  },

  navLink: {
    textDecoration: 'none',
    transition: 'all 1s ease',
    color: '#020628',

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
    fontWeight: 'lighter',
    textTransform: 'capitalize',
    flexGrow: 1,
    padding: '2em 0 0 0',
    overflow: 'auto',

    '@media (max-width: 678px)': {
      alignItems: 'flex-start',
      flexDirection: 'column',
      fontSize: '3rem',
      justifyContent: 'flex-start',
    },

    '@media (max-width: 478px)': {
      fontSize: '2.5rem',
    },
  },
}));
