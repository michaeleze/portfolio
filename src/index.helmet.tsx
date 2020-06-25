import { Helmet } from "react-helmet";
import App from "./App";
import React from "react";

const ReactApp = () => (
    <>
        <Helmet>
            <meta charSet="utf-8"/>
            <meta name="author" content="Michael Eze <https://linkedin.com/in/michaeleze>"/>
            <meta title="Software engineer, frontend, portfolio, developer, JavaScript, React, node, full-stack, UI, UX" />
            <meta name="description" content="Michael Eze is a passionate Software Engineer | FrontEnd and full-stack React developer also skilled in UX designing based in Germany. Hobbies include programming, dancing, music, cooking and sports(basket ball and football)"/>
            <link rel="canonical" href="https://michaeleze.dev"/>
            <link rel="publisher" href="https://linkedin.com/in/michaeleze"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Michael Eze is a passionate Software Engineer | FrontEnd and full-stack React developer "/>
            <meta property="og:description"
                  content="Michael Eze is a passionate Software Engineer | FrontEnd and full-stack React developer also skilled in UX designing based in Germany. Hobbies include programming, dancing, music, cooking and sports(basket ball and football)"/>
            <meta property="og:url" content="https://www.michaeleze.dev"/>
            <meta property="og:site_name" content="Neo Ighodaro"/>
            <meta property="og:image" content="%PUBLIC_URL%/me.jpg"/>
            <meta name="linkedin:card" content="summary"/>
            <meta name="linkedin:site" content="https://linkedin.com/in/michaeleze"/>
            <meta name="linkedin:title" content="Michael Eze &mdash; Germany Based Full-Stack React Developer"/>
            <meta name="linkedin:description"
                  content="Michael Eze is a passionate Software Engineer | FrontEnd and full-stack React developer also skilled in UX designing based in Germany. Hobbies include programming, dancing, music, cooking and sports(basket ball and football)"/>
            <meta name="linkedin:image" content="%PUBLIC_URL%/me.jpg"/>
            <link rel="icon" href="%PUBLIC_URL%/me.jpg"/>
            <meta name="viewport"
                  content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes"/>
            <meta name="theme-color" content="#000000"/>
            <meta name="description" content="Web site created using create-react-app"/>
            <title ng-bind="_title">Michael Eze &mdash; Germany Based Full-Stack Software Engineer</title>
            <link rel="apple-touch-icon" href="logo192.png"/>
        </Helmet>

        <App />
    </>
);

export default ReactApp
