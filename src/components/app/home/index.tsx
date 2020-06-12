import React from 'react';
import HomeTemplate from '../../../components/template/home';
import Title from '../../../components/atom/title';

const ColumnOneBackground = '#191322';
const ColumnTwoBackground = '#FC173E';

const Home: React.FC = () => (
    <section>
        <HomeTemplate columnOneBackground={ColumnOneBackground} columnTwoBackground={ColumnTwoBackground} />
        <Title />
    </section>
)

export default Home;
