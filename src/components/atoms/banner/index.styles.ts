import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    maxWidth: '100%',

  },

  text: {
    position: 'absolute',
    right: '0',
    top: '50%',
    margin: 'auto auto',
    left: '0',
    lineHeight: 1,
    color: '#fff',
    transform: 'translateY(-50%)',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '10em',
    textAlign: 'left',
    whiteSpace: 'pre-line'
  },
}));
