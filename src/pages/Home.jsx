import React from 'react';
import Hero from '../components/Hero';
import { News, Activities, Founder, GroupAlpha } from '../components/Sections';
import Anniversary from '../components/Anniversary';

const Home = () => {
    return (
        <main>
            <Hero />
            <Anniversary />
            <News />
            <Activities />
            <Founder />
            <GroupAlpha />
        </main>
    );
};

export default Home;
