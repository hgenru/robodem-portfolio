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
                <div className="cases__call_to_action">
                    <div className="content">
                        <h2 className="call_to_action__header">По любым вопросам звоните или пишите Александру</h2>
                        <p>
                            <div className="call_to_action__link_block">
                                <a href="mailto: a.ershov@robodem.com">
                                    a.ershov@robodem.com
                                </a>
                            </div>
                            <div className="call_to_action__link_block">
                                <a href="tel:+7 (925) 328-57-55">
                                    +7 (925) 328-57-55
                                </a>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
