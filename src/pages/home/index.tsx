import React, { Suspense, lazy } from 'react';
import TitleImage from '../../assets/images/title.png';
import Me from '../../assets/images/memoji2.png';

const HomeTemplate = lazy(() => import('../../components/templates/home'));

const Home: React.FC = () => {
  const mockData = {
    banner: TitleImage,
    content: {
      leftColumn: <span> hello world</span>,
      rightColumn: <img srcSet={Me} style={{width: '100%', margin: 'auto auto', textAlign: "center"}} />
    },
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeTemplate data={mockData} />
    </Suspense>
  );
};

export default Home;
