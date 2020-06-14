import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
  },
  leftColumn: {
    [theme.breakpoints.down('sm')]: {
      order: 2,
      flexBasis: '100%',
    },
  },
  rightColumn: {
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
}));
