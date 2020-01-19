
import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Bottle from '../../assets/images/bottle.png';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
interface IContact {
  caption?: string;
  content?: string;
  email?: string;
}

interface ISocialMedia {
  link: string;
  icon: JSX.Element;
}

const useStyles = makeStyles(() => ({
  AppHeader: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(15px + 2vmin)',
    textAlign: 'center',
  },
  AppLink: {
    '&:hover': {
      color: ' #09d3ac',
    },
    textDecoration: 'none',
  },
  email: {
    fontWeight: 800,
  },
  img: {
    maxWidth: '40%',
  },
  listItems: {
    listStyle: 'none',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  socialMediaItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const socialMediaItems: Array<ISocialMedia> = [
  { link: 'https://linkedin.com/in/michaeleze', icon: <FaLinkedin /> },
  { link: 'https://twitter.com/michaelcityboy', icon: <FaTwitter /> },
  { link: 'https://github.com/michaeleze', icon: <FaGithub /> }
]

const SocialMediaList = (props: any) => {
  const {
    classes,
  } = props;

  return (
    <ul className={classes.socialMediaItem}>
      {
        socialMediaItems.map((item) => (
          <li className={classes.listItems} key={item.link}>
            <a
              className={classes.AppLink}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        ))
      }
    </ul>
  );
};

const Contact: React.FC<IContact> = (props) => {
  const {
    caption = 'Find me on social media, or write me an email',
    content = "Say hi. Let's work together",
    email = 'michaeleze3@gmail.com',
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.AppHeader}>
      <Typography component="h1" variant="h1"> {content} </Typography>
      <SocialMediaList
        classes={classes}
      />
      <Typography component="p" variant="body1"> {caption} <a className={classes.email}>{email}</a></Typography>
      <img alt="message michael eze" className={classes.img} src={Bottle} />
    </div>
  );
}

export default Contact;
