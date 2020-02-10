import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
        color: '#fff',
        display: 'flex',
        fontSize: '21vw',
        left: '0',
        lineHeight: 1,
        maxWidth: '90%',
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        textTransform: 'uppercase',
        fontWeight: 900,
        textAlign: 'left',
        zIndex: 1,
    },
    img: {
        width: '100%',
    }
}));
