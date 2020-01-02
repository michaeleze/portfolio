import { About, Contact, Home, Work } from './pages';

export interface IRoutes {
    path: string;
    name: string;
    Component: React.FunctionComponent<{}>;
}

export const routes: IRoutes[] = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About },
    { path: '/contact', name: 'Contact', Component: Contact },
    { path: '/work', name: 'Work', Component: Work },
]