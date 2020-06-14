import React from 'react';
// import { Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
// import Layout from '../../../components/templates/home';
// // import LinkedInIcon from '@material-ui/icons/LinkedIn';
//
// interface IContact {
//   caption?: string;
//   content?: string;
//   email?: string;
// }
// interface ISocialMedia {
//   link: string;
//   icon: JSX.Element;
// }
//
// const useStyles = makeStyles(() => ({
//   AppLink: {
//     '&:hover': {
//       color: ' #09d3ac',
//     },
//     textDecoration: 'none',
//   },
//   email: {
//     fontWeight: 200,
//   },
//   listItems: {
//     listStyle: 'none',
//   },
//   socialMediaItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
// }));
//
// const socialMediaItems: Array<ISocialMedia> = [
//   {
//     link: 'https://linkedin.com/in/michaeleze',
//     icon: <FaLinkedin />,
//   },
//   {
//     link: 'https://twitter.com/michaelcityboy',
//     icon: <FaTwitter />,
//   },
//   {
//     link: 'https://github.com/michaeleze',
//     icon: <FaGithub />,
//   },
// ];
//
// const SocialMediaList = (props: any) => {
//   const {
//     classes,
//   } = props;
//
//   return (
//     <ul className={classes.socialMediaItem}>
//       {
//         socialMediaItems.map((item) => (
//           <li className={classes.listItems} key={item.link}>
//             <a
//               className={classes.AppLink}
//               href={item.link}
//               rel="noopener noreferrer"
//               target="_blank"
//             >
//               {item.icon}
//             </a>
//           </li>
//         ))
//       }
//     </ul>
//   );
// };
//
// const ContactContent: React.FC<any> = ({
//   caption = 'Find me on social media, or write me an email',
//   classes,
//   content = "SAY HI. LET'S WORK TOGETHER",
//   email = 'michaeleze3@gmail.com',
// }) => (
//   <div className={classes.container}>
//     <Typography component="h1" variant="h2"> {content} </Typography>
//     <SocialMediaList classes={classes} />
//     <Typography component="p" variant="body1">
//       <span>{caption}</span>
//       <a className={classes.email}>{email}</a>
//     </Typography>
//   </div>
// );
//
// const Contact: React.FC<IContact> = (props) => {
//   const classes = useStyles();
//
//   return (
//     <>
//       <Layout
//         columnOneBackground="white"
//         columnOneContent={<ContactContent classes={classes} {...props} />}
//         columnTwoBackground="url('https://images.pexels.com/photos/292426/pexels-photo-292426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w') center / cover"
//       />
//     </>
//   );
// };
//;

const Contact = () => <div> hello world </div>;
export default Contact;