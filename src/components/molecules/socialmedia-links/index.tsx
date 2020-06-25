import React from 'react';
import { useStyles } from './index.styles';

export interface ISocialMedia {
  link: string;
  icon: JSX.Element;
}

export interface ISocialMediaLinks{
  styles?: any;
  socialMedia?: Array<ISocialMedia>;
}

const SocialMediaLinks: React.FC<ISocialMediaLinks> = (props) => {
  const {
    styles,
    socialMedia = [],
  } = props;

  const defaultClasses = useStyles();
  const classes = styles || defaultClasses;

  return (
    <ul className={classes.socialMedia}>
      {
          socialMedia?.map((item) => (
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
  );
};

export default SocialMediaLinks;
