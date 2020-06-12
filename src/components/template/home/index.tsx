import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './index.style';
interface ILayout {
    classes?: any;
    columnOneBackground?: string;
    columnTwoBackground?: string;
    columnOneContent?: string | ReactElement;
    columnTwoContent?: string | ReactElement;
}

const Layout: React.FC<ILayout> = (props) => {
    const useStyle = useStyles(); 
    const {
        classes = useStyle,
        columnOneBackground = '#ff006d',
        columnTwoBackground = '#282c34',
        columnOneContent,
        columnTwoContent,
    } = props;

    return (
        <Grid container className={classes.container}>
            <Grid
                item
                className={classes.columnOne}
                children={columnOneContent}
                sm={6}
                style={{ background: columnOneBackground, backgroundSize: 'contain'}}
                xs={12}
            />
            <Grid
                item
                className={classes.columnTwo}
                children={columnTwoContent}
                sm={6}
                style={{ background: columnTwoBackground, backgroundSize: 'cover' }}
                xs={12}
            />
        </Grid>
    );
};

export default Layout;
