import React from 'react';
import { useStyles } from './index.styles';

export interface ISocialMedia {
    link: string;
    icon: JSX.Element;
};

export interface IFooter{
    footer?: string;
    socialMedia?: Array<ISocialMedia>;
}

const Footer: React.FC<IFooter> = (props) => {
    const {
        footer,
        socialMedia = []
    } = props;

    const classes = useStyles();

    return (
            <div className={classes.navFooter}>
                <ul className={classes.socialMedia}>
                    {
                        socialMedia && socialMedia.map((item) => (
                            <li  className={classes.socialMediaIcon} key={item.link}>
                                <a
                                    className={classes.icon}
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
                <p className={classes.footer}>{footer}</p>
            </div>
    );
};

export default Footer;
