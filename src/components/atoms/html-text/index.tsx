import React from 'react';

interface IHtmlText {
    text?: string;
    classes?: any;
};

const HtmlText: React.FC<IHtmlText> = (props) => {
    const { classes, text = '' } = props;

    function createMarkup() {
        return { __html: text };
    }

    return <p className={classes} dangerouslySetInnerHTML={createMarkup()}/>;
};

export default HtmlText;
