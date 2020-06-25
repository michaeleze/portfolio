import * as React from 'react';
import StoryRouter from 'storybook-react-router';
import NavBarMenu from './index';

export const navBarMenu = () => <NavBarMenu />;

export default {
  title: 'Molecules | NavBarMenu',
  decorators: [StoryRouter]
};