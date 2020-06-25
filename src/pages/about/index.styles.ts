import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    aboutImg: {
        borderRadius: '10px',
        filter: 'grayscale(80%)',
        gridColumnStart: 4,
        gridColumnEnd: 4,
        gridRowStart: 3,
        gridRowEnd: 4,
        maxWidth: '100%',
    },
    bio: {
        color: '#000',
        fontSize: '5vh',
        fontWeight: 700,
        gridColumnStart: 2,
        gridColumnEnd: 4,
        gridRowStart: 2,
        gridRowEnd: 2,
    },
    container: {
        // backgroundColor: '#191322',
        display: 'grid',
        gridTemplateColumns: '20% 20% 20% 20% 20%',
        gridTemplateRows: '20% 20% 20% 20% 20%',
        maxHeight: '100vh'
    },
    email: {
        backgroundColor: '#FC173E',
        borderRadius: '5px',
        color: 'white',
        textDecoration: 'none',
        padding: '8px 15px',
    },
    emailContainer: {
        cursor: 'pointer',
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 5,
        paddingLeft: '15px',
        paddingRight: '15px',
    },
    icon: {
        display: 'flex',
        justifyContent: 'space-between',
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 5,
        padding: 0
    },
    iconList: {
        listStyle: 'none',
    },
    redShape: {
        backgroundColor: '#ffdd00',
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRowStart: 2,
        gridRowEnd: 4,
    },
    summaryText: {
        // color: 'white',
        gridColumnStart: 2,
        gridColumnEnd: 4,
        gridRowStart: 4,
        gridRowEnd: 4,
    }
}));