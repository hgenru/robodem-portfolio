import React from 'react';
import './Case.css';

export default function CaseText({children}) {
    return (
        <div className="case__description_text" dangerouslySetInnerHTML={{__html: children}}/>
    );
}
