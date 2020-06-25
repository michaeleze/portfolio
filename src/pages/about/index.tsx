import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import M8 from '../../assets/images/m8.jpg';
import HtmlText from '../../components/atoms/html-text';
import { useStyles } from './index.styles';

interface IEmailTo {
  classes: any;
}
interface ISocialMedia {
  icon: JSX.Element;
  link: string;
}

const summaryText = `<p> I am a software engineer, designer and UX expert skilled in latest Frontend technology (such as React JS, Typescript,
  GraphQl), with solid experience using a well structured approach to find solutions for complex technical challenges</p>
     `;

// const moreText: string = `<p>I have had great success and achievements building next big technologies and applications over the past 4 years. </p>
//  <p> I don't just build software but love to train and mentor young aspiring tech enthusiast who love to code. <br /> Hobbies include programming, dancing, music, cooking and sports(basket ball and football).</p>`;

const socialMedia: ISocialMedia[] = [
  {
    icon: <LinkedInIcon />,
    link: 'https://linkedin.com/in/michaeleze',
  },
  {
    icon: <TwitterIcon />,
    link: 'https://twitter.com/michaelcityboy',
  },
  {
    icon: <GitHubIcon />,
    link: 'https://github.com/michaeleze',
  },
  {
    icon: <InstagramIcon />,
    link: 'https://instagram.com/michaeleze3',
  },
];

const RedShape = ({ classes }: any) => <div className={classes} />;

const EmailTo: React.FC<IEmailTo> = ({ classes }) => (
  <>
    <div className={classes.emailContainer}>
      <a className={classes.email} href="mailto:michaeleze3@gmail.com">
        Say Hi
      </a>
    </div>
  </>
);

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <RedShape classes={classes.redShape} />
      <h1 className={classes.bio}>Bring Your Imaginations to Life</h1>
      <HtmlText classes={classes.summaryText} text={summaryText} />
      <EmailTo classes={classes} />
      <ul className={classes.icon}>
        {
          socialMedia.map(({ icon, link }) => (
            <li className={classes.iconList} key={link}>
              <a href={link}>{icon}</a>
            </li>
          ))
        }
      </ul>
      <img alt="about-michaeleze" className={classes.aboutImg} src={M8} />
    </div>
  );
};

export default About;
