import React from 'react';
import * as C from '../../../components/case/index';

const ASSETS = './cases/mosaic';
const HEADER_PIC = `${ASSETS}/header-pic.png`;
const BLUEPRINT_PIC = `${ASSETS}/blueprint.png`;

import headerText from './text/header.html';
import descriptionText from './text/description.md';
import mediaMosaicText from './text/media-mosaic.html';

const PICTURES = C.createMediaPictures([
    {
        title: mediaMosaicText,
        src: `${ASSETS}/media-mosaic.jpg`
    }
]);

export default function CaseMosaic() {
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
