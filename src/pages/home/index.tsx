import React from 'react';
import Header from '../../components/header';
import HeaderText from '../../components/header-text';
import Me from '../../assets/images/me.jpg';

const Home: React.FC = () => (
    <section>
        <Header columnOneBackground={'rgba(255, 0, 109, 0.7)'} columnOneContent={<img alt="michael" src={Me} />} />
        <HeaderText />
    </section>
)

export default Home;
