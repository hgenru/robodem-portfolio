import React from 'react';
import * as C from '../../../components/case/index';

import descriptionText from './description.md';


export default function CaseMosaic() {
    return (
        <C.Case>
            <C.CaseText>{descriptionText}</C.CaseText>
        </C.Case>
    );
}
