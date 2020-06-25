import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'row',
  },

  container: {
    position: 'fixed',
    top: 0,
    padding: '1rem 0',
    width: '100%',
    zIndex: 3,
    backdropFilter: 'saturate(147%) blur(20px)',
    transition: 'background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)',
    transitionProperty: 'background-color, backdrop-filter',
    backgroundColor: 'rgba(0,0,0,.1)',
  },

  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    padding: 0,
    flexGrow: 0,
    transition: 'all 1s ease',
    outline: 'none',
  },

  hamburger: {
    padding: '15px',
    transition: 'all 1s ease',

    '&:hover': {
      borderRadius: '6px',
    },
  },

  lineOpen: {
    background: 'rgba(0,0,0,.4)',
    borderRadius: '6px',
    width: '30px',
    height: '3px',
    transition: 'all 1s ease',

    '&:nth-child(even)': {
      margin: '10px 0 0 0',
    },
  },

  lineCross: {
    background: 'rgba(0,0,0,.4)',
    borderRadius: '6px',
    width: '30px',
    height: '3px',

    '&:nth-child(even)': {
      transition: 'transform 1s ease',
      transform: 'rotate(-45deg)',
    },
    '&:nth-child(odd)': {
      position: 'relative',
      top: '3px',
      transition: 'transform 1s ease',
      transform: 'rotate(45deg)',
    },
  },

  text: {
    textDecoration: 'none',
    color: '#020628',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  menu: {
    padding: '11px  0',
    fontWeight: 'lighter',
    fontSize: '1.3em',
    textTransform: 'capitalize'
  },

  title: {
    flexGrow: 1,
    padding: '15px',
  },

  whiteBackground: {
    transition: 'background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)',
    transitionProperty: 'background-color',
    backgroundColor: 'white',
    borderBottom: '1px solid black'
  },
}));
