import React from 'react';
import * as C from '../../../components/case/index';

import descriptionText from './description.md';


const ASSETS = './cases/stone-quality';
const BLUEPRINT_PIC = `${ASSETS}/blueprint.png`;

export default function CaseStoneQuality() {
    return (
        <C.Case>
            <C.CaseText>{descriptionText}</C.CaseText>
        </C.Case>
    );
}
