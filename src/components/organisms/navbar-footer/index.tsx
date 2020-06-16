import React from 'react';
import { useStyles } from './index.styles';
import SocialMediaLinks from "../../molecules/socialmedia-links";

export interface ISocialMedia {
  link: string;
  icon: JSX.Element;
}

export interface IFooter{
  text?: string;
  socialMedia?: Array<ISocialMedia>;
}

const NavBarFooter: React.FC<IFooter> = (props) => {
  const {
    text,
    socialMedia = [],
  } = props;

  const classes = useStyles();

  return (
    <>
      <SocialMediaLinks socialMedia={socialMedia} />
      <p className={classes.footer}>{text}</p>
    </>
  );
};

export default NavBarFooter;
