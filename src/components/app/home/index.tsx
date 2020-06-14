import React, { Suspense, lazy } from 'react';

const Template = lazy(() => import('../../../components/template/home'));
const PageTitle = lazy(() => import('../../atom/banner'));

const Home: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Template />
    <PageTitle />
  </Suspense>
);

export default Home;
