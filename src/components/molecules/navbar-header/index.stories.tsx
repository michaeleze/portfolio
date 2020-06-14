import * as React from 'react';
import StoryRouter from 'storybook-react-router';
import NavBarHeader from './index';

export const navBarHeader = () => <NavBarHeader />;

export default {
  title: 'Shared | NavBarHeader',
  decorators: [StoryRouter]
};