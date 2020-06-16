import * as React from 'react';
import StoryRouter from 'storybook-react-router';
import NavBarFooter from './index';

export const navBarFooter = () => <NavBarFooter />;

export default {
  title: 'Molecules | NavBarFooter',
  decorators: [StoryRouter]
};