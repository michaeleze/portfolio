import React from 'react';
import { useStyles } from './index.styles';
import TwoColumnLayout, { ITwoColumnLayout } from '../../organism/two-column-layout';

const mockContent = {
  leftColumn: <h1> hello world</h1>,
  rightColumn: <p> welcome </p>,
};

const ColumnOneBackground = '#191322';
const ColumnTwoBackground = '#FC173E';

const HomeTemplate: React.FC<ITwoColumnLayout> = (props) => {
  const classes = useStyles();

  const {
    content = mockContent,
    styles,
  } = props;

  return (
    <TwoColumnLayout content={content} />
  );
};

export default HomeTemplate;
