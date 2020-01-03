import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

interface ISummaryText {
    summary?: any;
};

const summarycontent = `<p> I am a software engineer, designer and UX expert skilled in latest Frontend technology (such as React JS, Typescript,
    GraphQl), with solid experience using a well structured approach to find solutions for complex technical chanllenges</p>
        <p>I have had great success and achievements building next big technologies and applications over the past 4 years. </p>
        <p> I don't just build softwares but love to train and mentor young aspiring tech enthusiast who love to code. <br /> Hobbies include programming, dancing, music, cooking and sports(basket ball and football).</p>
       `;

const useStyles = makeStyles(theme => ({
    summary: {
        fontWeight: 100,
        lineHeight: 1.5,
      },
}));

const SummaryText: React.FC<ISummaryText> = (props) => {
    const { summary = summarycontent } = props;
    const classes = useStyles();

    function createMarkup() {
        return { __html: summary };
    }

    return <Typography className={classes.summary} component="p" dangerouslySetInnerHTML={createMarkup()} variant="body1" />;
};

export default SummaryText;
