import React from 'react';
import './Case.css';

export default function CaseContent({children}) {
    return (
        <div className="case__content">{children}</div>
    );
}
