import React, { Suspense, lazy } from 'react';

const Template = lazy(() => import('../../components/templates/home'));
const Banner = lazy(() => import('../../components/atoms/banner'));

const Home: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Template />
    <Banner />
  </Suspense>
);

export default Home;
