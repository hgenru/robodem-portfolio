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
                <section className="cases">
                    <div className="content">
                        <header className="cases__header">
                            <h2>Портфолио</h2>
                        </header>
                    </div>
                    <div className="content">
                        <CaseStoneQuality/>
                        <CaseDrone/>
                        <CaseMosaic/>
                    </div>
                </section>
            </div>
            <div className="cases_expander cases_expander--bottom"/>
        </div>
    );
}
