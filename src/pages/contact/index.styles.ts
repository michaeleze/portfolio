import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  body: {
    fontSize: '3em',
    fontWeight: 200,
    margin: '1rem 0',

  },

  email: {
    color: '#FC173E',
  },

  headline: {
    color: '#ffdd00',
    fontSize: '5.5em',
    fontWeight: 400,
    margin: '1rem 0',
  },

  icon: {
    color: 'rgba(34,26,45,0.8)',
    fontSize: '3em',
    textDecoration: 'none',
    transition: 'all 1s ease',

    '&:hover': {
      color: '#FC173E',
    },
    '@media (max-width: 978px)': {
      fontSize: '2.2rem',
      margin: '0 .7em',
    },
  },

  leftColumn: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  navLink: {
    textDecoration: 'none',
    transition: 'all 1s ease',

    '&:hover': {
      color: '#FC173E',
    },
  },

  rightColumn: {
    maxWidth: '100%',
    minHeight: '100vh',
    position: 'fixed',
  },

  socialMedia: {
    padding: '1em 0',
    margin: '4em 0 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  socialMediaIcon: {
    listStyle: 'none',
  }
}));
