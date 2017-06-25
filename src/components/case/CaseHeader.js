import React from 'react';
import './Case.css';

export default function CaseHeader({children, picture}) {
    return (
        <header className="case__header">
            <img className="case__header__img" src={picture}/>
            <h1>{children}</h1>
        </header>
    );
}
