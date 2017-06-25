import React from 'react';
import './Case.css';

export default function CaseDescriptionBlueprint({picture}) {
    return (
        <figure className="case__description_blueprint">
            <img src={picture}/>
        </figure>
    );
}
