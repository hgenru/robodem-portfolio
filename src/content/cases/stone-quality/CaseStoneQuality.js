import React from 'react';
import * as C from '../../../components/case/index';

import descriptionText from './text/description.md';
import headerText from './text/header.html';
import mediaQualityScreenText from './text/media-quality-screen.html';

const ASSETS = './cases/stone-quality';
const HEADER_PIC = `${ASSETS}/header-pic.png`;
const BLUEPRINT_PIC = `${ASSETS}/blueprint.png`;

const PICTURES = C.createMediaPictures([
    {
        title: mediaQualityScreenText,
        src: `${ASSETS}/media-quality-screen.jpg`
    }
]);

export default function CaseStoneQuality() {
    return (
        <C.Case>
            <C.CaseHeader picture={HEADER_PIC}>{headerText}</C.CaseHeader>
            <C.CaseContent>
                <C.CaseDescription>
                    <C.CaseDescriptionText>{descriptionText}</C.CaseDescriptionText>
                    <C.CaseDescriptionBlueprint picture={BLUEPRINT_PIC}/>
                </C.CaseDescription>
                <C.CaseMedia>
                    <C.CaseMediaPictures pictures={PICTURES}/>
                </C.CaseMedia>
            </C.CaseContent>
        </C.Case>
    );
}
