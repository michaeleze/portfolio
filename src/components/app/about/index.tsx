import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HtmlText from '../../atom/html-text';
import M8 from '../../../assets/images/m8.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

interface IEmailTo {
  classes: any;
}
interface ISocialMedia {
  icon: JSX.Element;
  link: string;
}

const summaryText: string = `<p> I am a software engineer, designer and UX expert skilled in latest Frontend technology (such as React JS, Typescript,
  GraphQl), with solid experience using a well structured approach to find solutions for complex technical challenges</p>
     `;

// const moreText: string = `<p>I have had great success and achievements building next big technologies and applications over the past 4 years. </p>
//  <p> I don't just build software but love to train and mentor young aspiring tech enthusiast who love to code. <br /> Hobbies include programming, dancing, music, cooking and sports(basket ball and football).</p>`;

const socialMedia: ISocialMedia[] = [
  { icon: <LinkedInIcon />, link: 'https://linkedin.com/in/michaeleze' },
  { icon: <TwitterIcon />, link: 'https://twitter.com/michaelcityboy' },
  { icon: <GitHubIcon />, link: 'https://github.com/michaeleze' },
  { icon: <InstagramIcon />, link: 'https://instagram.com/michaeleze3' },
]

const useStyles = makeStyles(() => ({
  aboutImg: {
    borderRadius: '10px',
    filter: 'grayscale(80%)',
    gridColumnStart: 4,
    gridColumnEnd: 4,
    gridRowStart: 3,
    gridRowEnd: 4,
    maxWidth: '100%',
  },
  bio: {
    color: '#fc173e',
    fontSize: '5vh',
    fontWeight: 700,
    gridColumnStart: 2,
    gridColumnEnd: 4,
    gridRowStart: 2,
    gridRowEnd: 2,
  },
  container: {
    // backgroundColor: '#191322',
    display: 'grid',
    gridTemplateColumns: '20% 20% 20% 20% 20%',
    gridTemplateRows: '20% 20% 20% 20% 20%',
    maxHeight: '100vh'
  },
  email: {
    backgroundColor: '#FC173E',
    borderRadius: '5px',
    color: 'white',
    textDecoration: 'none',
    padding: '8px 15px',
  },
  emailContainer: {
    cursor: 'pointer',
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 5,
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-between',
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 5,
    padding: 0
  },
  iconList: {
    listStyle: 'none',
  },
  redShape: {
    backgroundColor: '#ffdd00',
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 4,
  },
  summaryText: {
    // color: 'white',
    gridColumnStart: 2,
    gridColumnEnd: 4,
    gridRowStart: 4,
    gridRowEnd: 4,
  }
}));

const RedShape = ({ classes }: any) => <div className={classes}></div>

const EmailTo: React.FC<IEmailTo> = ({classes}) => (
  <>
    <div className={classes.emailContainer}>
      <a className={classes.email} href="mailto:michaeleze3@gmail.com">
        Say Hi
         </a>
    </div>
  </>
)

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <RedShape classes={classes.redShape} />
      <h1 className={classes.bio}>Bring Your Imaginations to Life</h1>
      <HtmlText classes={classes.summaryText} text={summaryText} />
      <EmailTo classes={classes} />
      <ul className={classes.icon}> {socialMedia.map(({ icon, link }) => <li className={classes.iconList}><a href={link}>{icon}</a></li>)}</ul>
      <img alt="about-michaeleze" className={classes.aboutImg} src={M8} />
    </div>
  )
}

export default About;
