import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        position: 'relative',
    },
    columnOne: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    },
    columnTwo: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    }
}));