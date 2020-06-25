import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
  },

  icon: {
    color: 'rgba(34,26,45,0.8)',
    fontSize: '3em',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '0 1em',
    transition: 'all 1s ease',

    '&:hover': {
      color: '#FC173E',
    },
    '@media (max-width: 978px)': {
      fontSize: '2.2rem',
      margin: '0 .7em',
    },
  },

  navLink: {
    textDecoration: 'none',
    transition: 'all 1s ease',

    '&:hover': {
      color: '#FC173E',
    },
  },

  socialMedia: {
    margin: 0,
    padding: '0 0 1em 0',
    textAlign: 'center',
  },

  socialMediaIcon: {
    display: 'inline-block',
  },
}));
