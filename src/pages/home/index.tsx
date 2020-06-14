import React, { Suspense, lazy } from 'react';
import TitleImage from '../../assets/images/title.png';

const HomeTemplate = lazy(() => import('../../components/templates/home'));

const Home: React.FC = () => {
    const mockData = {
            banner: TitleImage,
            content: {
                leftColumn: <span> hello world</span>,
                rightColumn: <span> welcome </span>,
            },
        };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeTemplate data={mockData} />
        </Suspense>
    )
}

export default Home;
