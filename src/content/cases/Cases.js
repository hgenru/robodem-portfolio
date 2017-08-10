import React from 'react';
import './Cases.css';

import CaseStoneQuality from './stone-quality/CaseStoneQuality';
import CaseDrone from './drone/CaseDrone';
import CaseMosaic from './mosaic/CaseMosaic';
import CaseHook from './hook/CaseHook';
import CasePCB from './pcb/CasePCB';

export default function Cases() {
    return (
        <div className="cases_wrapper">
            <div className="cases_expander"/>
            <div className="cases_container">
                <section className="cases">
                    <div className="content">
                        <header className="cases__header">
                            <h2>Примеры работ</h2>
                        </header>
                    </div>
                    <div className="content">
                        <CaseHook/>
                        <CaseStoneQuality/>
                        <CaseDrone/>
                        <CaseMosaic/>
                        <CasePCB/>
                    </div>
                </section>
            </div>
        </div>
    );
}
