import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        position: 'sticky',
        top: 0,
        padding: '1rem',
        zIndex: 3
    },
    button: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        padding: '10px 15px',
        flexGrow: 0,
        transition: 'all 1s ease',
        outline: 'none'
    },
    hamburger: {
      padding: '15px',
      transition: 'all 1s ease',

        '&:hover': {
            border: '1px solid #ffdd00',
            borderRadius: '6px',
        }
    },
    lineOpen: {
        background: 'rgba(0,0,0,.4)',
        borderRadius: '6px',
        width: '30px',
        height: '3px',
        transition: 'all 1s ease',

        '&:hover': {
            background: 'white',
        },
        '&:nth-child(even)': {
          margin: '10px 0 0 0'
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
            transform: 'rotate(45deg)'
        }
    },
    menu: {
      padding: '15px'
    },
    title: {
        flexGrow: 1,
        padding: '15px 0'
    }
}))