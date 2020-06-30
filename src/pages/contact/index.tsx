import React from 'react';
import { useStyles } from './index.styles';
import TwoColumnLayout from '../../components/organisms/two-column-layout';
import SocialMediaLinks from '../../components/molecules/socialmedia-links';
import { mockSocialMediaItems } from '../../App';
import MyPicture from '../../assets/images/PSX_20200615_212918.jpg';

interface IContact {
  body?: string;
  content?: string;
  headline?: string;
  email?: string;
}

const ContactContent: React.FC<any> = ({
  body = " Let'models work together",
  footer = 'Find me on social media, or write me an email',
  classes,
  headline = 'Say Hi!',
  email = 'michaeleze3@gmail.com',
}) => (
  <div className={classes.container}>
    <div>
      <h2 className={classes.headline}>{headline}</h2>
      <p className={classes.body}>{body}</p>
    </div>
    <SocialMediaLinks socialMedia={mockSocialMediaItems} styles={classes} />
    <p>
      <span>{footer}</span> <a className={classes.email} href={`mailto:${email}?`}>{email}</a>
    </p>
  </div>
);

const Contact: React.FC<IContact> = (props) => {
  const classes = useStyles();

  const data = {
    content: {
      leftColumn: <ContactContent classes={classes} {...props} />,
      rightColumn: <img alt="michael_image" src={MyPicture} />,
    },
    styles: {
      leftColumn: classes.leftColumn,
      rightColumn: classes.rightColumn,
    },
  };

  return (
    <TwoColumnLayout
      content={data.content}
      styles={data.styles}
    />
  );
};

export default Contact;
