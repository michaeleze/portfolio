import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import SummaryText from '../../components/summary-text';
import M8 from '../../assets/images/m8.jpg'
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

interface IAboutText {
  classes: Record<"bio" | "container" | "email" | "emailContainer" | "linkHome" | "name", string>;
}

const useStyles = makeStyles(() => ({
  bio: {
    fontSize: '4em',
    padding: 0,
    margin: 0
  },
  container: {
    fontWeight: 700,
    height: 'auto',
    letterSpacing: '0.03em',
    lineHeight: '1',
    margin: '0 auto',
    width: '70%'
  },
  email: {
    backgroundColor: '#ffdd00',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    padding: '8px 15px',
    textDecoration: 'none',
  },
  emailContainer: {
    padding: '15px 0',
  },
  linkHome: {
    bottom: '15px',
    color: '#111',
    fontWeight: 100,
    lineHeight: 1.5,
    position: 'relative',
    textDecoration: 'none',
  },
  name: {
    color: '#ffdd00',
    fontSize: '1.5em',
    padding: 0,
  },
}));

const backgroundImage: string = `url(${M8}) no-repeat center`;

const AboutText: React.FC<IAboutText> = ({ classes }) => (
  <div className={classes.container}>
    <Typography className={classes.name}> Michael C. Eze </Typography>
    <Typography variant="h1" className={classes.bio}> <b>Bring Your Imaginations to Life</b></Typography>
    <SummaryText />
    <Typography className={classes.emailContainer}><a className={classes.email} href="mailto:michaeleze3@gmail.com"> Say Hi</a></Typography>
    <a href="https://linkedin.com/in/michaeleze">linkedin</a>
    <a href="https://twitter.com/michaelcityboy">Twitter Logo</a>
  </div>
)

const About: React.FC = () => {
  const classes = useStyles();

  return <Header columnOneBackground="white" columnTwoBackground={backgroundImage} columnOneContent={<AboutText classes={classes} />} />;
}

export default About;
