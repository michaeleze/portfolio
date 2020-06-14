import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './index.styles';

export interface ITwoColumnLayout {
  content?: {
    leftColumn: ReactElement | undefined;
    rightColumn: ReactElement | undefined;
  };
  styles?: {
    leftColumn: string | undefined;
    rightColumn: string | undefined;
  };
}

const TwoColumnLayout: React.FC<ITwoColumnLayout> = (props) => {
  const classes = useStyles();

  const {
    content,
    styles,
  } = props;

  return (
    <Grid container className={classes.container}>
      <Grid
        item
        className={classes.leftColumn}
        sm={6}
        xs={12}
      >
        <div className={styles?.leftColumn}>
          {content?.leftColumn}
        </div>
      </Grid>
      <Grid
        item
        className={classes.rightColumn}
        sm={6}
        xs={12}
      >
        <div className={styles?.rightColumn}>
          {content?.rightColumn}
        </div>
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
