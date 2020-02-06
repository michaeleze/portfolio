
import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Bottle from '../../assets/images/bottle2.png';
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
  AppLink: {
    '&:hover': {
      color: ' #09d3ac',
    },
    textDecoration: 'none',
  },
  email: {
    fontWeight: 200,
  },
  img: {
    maxWidth: '20%',
  },
  listItems: {
    listStyle: 'none',
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

const ContactContent: React.FC<any> = ({
  caption = 'Find me on social media, or write me an email',
  classes,
  content = "Say hi. Let's work together",
  email = 'michaeleze3@gmail.com',
}) => (
  <div className={classes.container}>
    <Typography component="h1" variant="h1"> {content} </Typography>
    <SocialMediaList classes={classes} />
    <Typography component="p" variant="body1">
      <span>{caption}</span>
      <a className={classes.email}>{email}</a>
    </Typography>
  </div>
)

const Contact: React.FC<IContact> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Header
        columnOneBackground="white"
        columnTwoBackground={"white"}
        columnOneContent={<ContactContent classes={classes} {...props} />}
        columnTwoContent={<img alt="message michael eze" className={classes.img} src={Bottle} />}
      />
    </>
  );
}

export default Contact;
