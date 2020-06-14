import * as React from 'react';
import StoryRouter from 'storybook-react-router';
import Footer from './index';

export const footer = () => <Footer />;

export default {
  title: 'Shared | Footer',
  decorators: [StoryRouter]
};