import React from 'react';
import TwoColumnLayout from '../../organisms/two-column-layout';
import { useStyles } from './index.styles';
import Banner from '../../atoms/banner';

interface IHomeTemplate {
  data?: any;
}

const HomeTemplate: React.FC<IHomeTemplate> = (props) => {
  const { data } = props;
  const { banner, content } = data;

  const classes = useStyles();

  const styles = {
        leftColumn: classes.leftColumn,
        rightColumn: classes.rightColumn,
      };

  return (
      <>
        <TwoColumnLayout content={content} styles={styles} />
        <Banner src={banner}/>
      </>
  );
};

export default HomeTemplate;
