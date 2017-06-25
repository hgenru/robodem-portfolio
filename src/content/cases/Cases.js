import React from 'react';
import './Cases.css';

import CaseStoneQuality from './stone-quality/CaseStoneQuality';
import CaseDrone from './drone/CaseDrone';
import CaseMosaic from './mosaic/CaseMosaic';

export default function Cases() {
    return (
        <section className="cases">
            <CaseStoneQuality/>
            <CaseDrone/>
            <CaseMosaic/>
        </section>
    );
}
