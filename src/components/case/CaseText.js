import React from 'react';
import './Case.css';

export default function CaseText({children}) {
    return (
        <div className="case__text" dangerouslySetInnerHTML={{__html: children}}/>
    );
}
