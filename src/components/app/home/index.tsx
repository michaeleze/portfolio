import React from 'react';
import Layout from '../../../components/app/home';
import Title from '../../../components/atom/title';

const ColumnOneBackground = '#191322';
const ColumnTwoBackground = '#FC173E';

const Home: React.FC = () => (
    <section>
        {/*<Layout columnOneBackground={ColumnOneBackground} columnTwoBackground={ColumnTwoBackground} />*/}
        <Title />
    </section>
)

export default Home;
