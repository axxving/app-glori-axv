import React from 'react';
import { Header } from './sections/header/Header';
import { Hero } from './sections/hero/Hero';
import { About } from './sections/about/About';
import { Library } from './sections/library/Library';

export const Page = () => {
    const pageStyle = {
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    };

    return (
        <div style={pageStyle}>
            <Header />
            <Hero />
            <About />
            <Library />
        </div>
    );
};
