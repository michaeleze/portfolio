import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HtmlText from '../../components/html-text';
import M8 from '../../assets/images/m8.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
interface IAboutText {
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
    maxWidth: '30%',
    borderRadius: '10px'
  },
  bio: {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 700,
    gridColumn: '1 / 3',
    gridRow: 1,
    lineHeight: 1,
    marginTop: '15px',
    marginBottom: '15px',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  container: {
    backgroundColor: '#191322',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridGap: '10px',
    gridAutoRows: 'minmax(100px, auto)',
    minHeight: '100vh',
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
    gridColumn: '1 / 2',
    gridRow: 3,
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-between',
    gridColumn: '1 / 3',
    gridRow: 5,
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  iconList: {
    listStyle: 'none',
  },
  redShape: {
    backgroundColor: '#FC173E',
    gridColumn: '1 / 1',
    gridRow: '2 / span 1',
    height: '100%',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 200,
    gridColumn: '1 / 7',
    gridRow: 2,
    lineHeight: 1.5,
    paddingLeft: '15px',
    paddingRight: '15px',
  }
}));

const RedShape = ({ classes }: any) => <div className={classes}></div>

const Content: React.FC<IAboutText> = ({ classes }) => (
  <div className={classes.content}>
    <div>
      <HtmlText text={summaryText} />
      <div className={classes.emailContainer}>
        <a className={classes.email} href="mailto:michaeleze3@gmail.com">
          Say Hi
         </a>
      </div>
      <ul className={classes.icon}> {socialMedia.map(({ icon, link }) => <li className={classes.iconList}><a href={link}>{icon}</a></li>)}</ul>
    </div>
    <img alt="about-michaeleze" className={classes.aboutImg} src={M8} />
  </div>
)

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <RedShape classes={classes.redShape} />
      <h1 className={classes.bio}>Bring Your Imaginations to Life</h1>
      <Content classes={classes} />
    </div>
  )
}

export default About;
