// import { configure } from '@storybook/react';

// // automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.js$/), module);

import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
configure(require.context('../src/components', true, /\.stories\.tsx?$/), module)