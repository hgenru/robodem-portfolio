import React from 'react';
import './Case.css';

export default function CaseText({children}) {
    return (
        <p className="case__description_text">{children}</p>
    );
}
