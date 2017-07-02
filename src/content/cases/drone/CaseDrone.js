import React from 'react';
import * as C from '../../../components/case';

const ASSETS = './cases/drone';
const HEADER_PIC = `${ASSETS}/header-pic.png`;
const BLUEPRINT_PIC = `${ASSETS}/blueprint.png`;

import descriptionText from './text/description.md';
import headerText from './text/header.html';
import mediaPanelText from './text/media-panel.html';

const PICTURES = C.createMediaPictures([
    {
        src: `${ASSETS}/media-view.jpg`,
    },
    {
        src: `${ASSETS}/media-panel.jpg`,
        title: mediaPanelText
    }
]);

export default function CaseDrone() {
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
