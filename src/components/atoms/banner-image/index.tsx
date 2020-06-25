import React from 'react';
import { useStyles } from './index.styles';

interface IBanner {
  src?: string;
}

const Banner: React.FC<IBanner> = ({ src }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img alt="michal eze" className={classes.img} src={src} />
    </div>
  );
};

export default Banner;
