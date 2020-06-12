import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
      minHeight: '100vh'  
    },
    columnOne: {
        [theme.breakpoints.down('sm')]: {
            order: 2,
            flexBasis: '100%'
        },
    },
    columnTwo: {
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    }
}));