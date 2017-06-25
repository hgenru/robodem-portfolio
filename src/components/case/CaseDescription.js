import React from 'react';
import './Case.css';

export default function CaseDescription({children}) {
    return (
        <div className="case__description">{children}</div>
    );
}
