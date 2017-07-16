import React from 'react';
import './Cases.css';

import CaseStoneQuality from './stone-quality/CaseStoneQuality';
import CaseDrone from './drone/CaseDrone';
import CaseMosaic from './mosaic/CaseMosaic';

export default function Cases() {
    return (
        <div className="cases_wrapper">
            <div className="cases_expander cases_expander--top"/>
            <div className="cases_container">
                <section className="cases content">
                    <CaseStoneQuality/>
                    <CaseDrone/>
                    <CaseMosaic/>
                </section>
            </div>
            <div className="cases_expander cases_expander--bottom"/>
        </div>
    );
}
