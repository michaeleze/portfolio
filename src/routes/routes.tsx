import { AboutMe, Apps, Contact, Home, Work } from '.././pages';

export interface IRoutes {
    path: string;
    name: string;
    Component: React.FunctionComponent;
}

export const routes: Array<IRoutes> = [
    {
        path: '/',
        name: 'Home',
        Component: Home,
    },
    {
        path: '/about-me',
        name: 'About',
        Component: AboutMe,
    },
    {
        path: '/contact',
        name: 'Contact',
        Component: Contact,
    },
    {
        path: '/work',
        name: 'Work',
        Component: Work,
    },
    {
        path: '/apps',
        name: 'Apps',
        Component: Apps,
    }
];
