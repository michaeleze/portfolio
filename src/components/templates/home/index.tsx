import React from 'react';
import TwoColumnLayout, { ITwoColumnLayout } from '../../organisms/two-column-layout';
import { useStyles } from './index.styles';

interface IHomeTemplate {
  data?: ITwoColumnLayout;
}

const HomeTemplate: React.FC<IHomeTemplate> = (props) => {
  const classes = useStyles();

  const {
    data = {
      content: {
        leftColumn: <span> hello world</span>,
        rightColumn: <span> welcome </span>,
      },
      styles: {
        leftColumn: classes.leftColumn,
        rightColumn: classes.rightColumn,
      },
    },
  } = props;

  const { content, styles } = data;

  return (
    <TwoColumnLayout content={content} styles={styles} />
  );
};

export default HomeTemplate;
