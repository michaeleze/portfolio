import * as React from 'react';
import StoryRouter from 'storybook-react-router';
import NavBar from './index'; 

export const navbar = () => <NavBar />;

export default {
  title: 'Shared | NavBar',
  decorators: [StoryRouter]
};