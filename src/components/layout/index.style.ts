import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    columnOne: {
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    },
    columnTwo: {
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    }
}));