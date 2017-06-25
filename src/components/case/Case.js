import React from 'react';
import './Case.css';

export default function CaseSection({children}) {
    return (
        <section className="case">
            {children}
        </section>
    );
}
