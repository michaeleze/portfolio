import React from 'react';
import { useStyles } from './index.styles';

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
      <ul className={classes.socialMedia}>
        {
          socialMedia && socialMedia.map((item) => (
            <li className={classes.socialMediaIcon} key={item.link}>
              <a
                className={classes.icon}
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.icon}
              </a>
            </li>
          ))
        }
      </ul>
      <p className={classes.footer}>{text}</p>
    </>
  );
};

export default NavBarFooter;
