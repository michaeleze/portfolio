import React from 'react';
import Layout from '../../components/layout';
import Title from '../../components/title';

const ColumnOneBackground = '#191322';
const ColumnTwoBackground = '#FC173E';

const Home: React.FC = () => (
    <section>
        <Layout columnOneBackground={ColumnOneBackground} columnTwoBackground={ColumnTwoBackground} />
        <Title />
    </section>
)

export default Home;
