import React from 'react';
import TitleImage from '../../../assets/images/title.png';
import { useStyles } from './index.styles';

interface IHeaderText {
  textStrokeColor?: string;
  text?: string;
}

const Banner: React.FC<IHeaderText> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img alt="michal eze" className={classes.img} src={TitleImage} />
    </div>
  );
};

export default Banner;
