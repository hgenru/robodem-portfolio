import React from 'react';
import './Cases.css';

import CaseStoneQuality from './stone-quality/CaseStoneQuality';
import CaseDrone from './drone/CaseDrone';
import CaseMosaic from './mosaic/CaseMosaic';

export default function Cases() {
    return (
        <div className="cases_wrapper">
            <section className="cases content">
                <CaseStoneQuality/>
                <CaseDrone/>
                <CaseMosaic/>
            </section>
        </div>
    );
}
