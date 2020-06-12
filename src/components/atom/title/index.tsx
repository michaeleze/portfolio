import React from 'react';
import TitleImage from '../../../assets/images/title.png';
import { useStyles } from './index.style';
interface IHeaderText {
    textStrokeColor?: string;
    text?: string;
};

const Title: React.FC<IHeaderText> = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img alt="michal eze" className={classes.img} src={TitleImage} />
        </div>
    );
};

export default Title;
