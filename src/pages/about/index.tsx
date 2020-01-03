import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';

interface IAboutText {
  classes: Record<"bio" | "container" | "name", string>;
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
    lineHeight: '1.2',
    margin: '0 auto',
    width: '70%'
  },
  name: {
    color: 'red',
    fontSize: '1.5em',
    padding: 0,
  }
}));

const AboutText: React.FC<IAboutText> = ({ classes }) => (
  <div className={classes.container}>
    <h1 className={classes.name}> Michael C. Eze </h1>
    <h2 className={classes.bio}> <b>Software Engineer, Designer and UX Expert</b></h2>
    <p>michaeleze3@gmail.com</p>
    <a href="https://linkedin.com/in/michaeleze">Linkedin logo</a>
    <a href="https://twitter.com/michaelcityboy">Twitter Logo</a>
  </div>
)

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <section>
      <Header columnOneBackground="white" columnOneContent={<AboutText classes={classes} />} />
    </section>
  );
}

export default About;
