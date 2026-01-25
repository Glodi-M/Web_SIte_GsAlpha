import React from 'react';
import Hero from '../components/Hero';
import { ProjectEducatif, News, Activities, Founder, GroupAlpha } from '../components/Sections';

const Home = () => {
    return (
        <main>
            <Hero />
            <ProjectEducatif />
            <News />
            <Activities />
            <Founder />
            <GroupAlpha />
        </main>
    );
};

export default Home;
