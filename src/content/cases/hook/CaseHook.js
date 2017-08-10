import React from 'react';
import * as C from '../../../components/case';

import descriptionText from './description.md';


export default function CaseHook() {
    return (
        <C.Case>
            <C.CaseText>{descriptionText}</C.CaseText>
        </C.Case>
    );
}
