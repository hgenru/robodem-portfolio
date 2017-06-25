import React from 'react';
import Case from '../../../components/case/Case.js';
import CaseHeader from '../../../components/case/CaseHeader.js';
import CaseContent from '../../../components/case/CaseContent.js';
import CaseDescription from '../../../components/case/CaseDescription.js';
import CaseDescriptionText from '../../../components/case/CaseDescriptionText.js';
import CaseDescriptionBlueprint from '../../../components/case/CaseDescriptionBlueprint.js';
import CaseMedia from '../../../components/case/CaseMedia.js';

const ASSETS = './cases/drone';
const HEADER_PIC = `${ASSETS}/header-pic.png`;
const BLUEPRINT_PIC = `${ASSETS}/blueprint.png`;

const TEXT = `
В 2013 году компания КРОК организовала конкурс: победит тот, чей дрон быстрее всех самостоятельно пролетит по коридору длиной 30 метров и приземлится в нескольких контрольных точках.
Мы поставили цель создать такую систему, которая видит дорогу и преграды только при помощи камер. Специально отказались от использования GPS, сенсоров и датчиков. Наш дрон прошел весь путь, ориентируясь только на изображение с камеры, и оказался самым быстрым.
`;

export default function CaseDrone() {
    return (
        <Case>
            <CaseHeader picture={HEADER_PIC}>
                Навигация для беспилотника
            </CaseHeader>
            <CaseContent>
                <CaseDescription>
                    <CaseDescriptionText>{TEXT}</CaseDescriptionText>
                    <CaseDescriptionBlueprint picture={BLUEPRINT_PIC}/>
                </CaseDescription>
                <CaseMedia>
                    <figure>
                        <img src={`${ASSETS}/media-view.jpg`}/>
                    </figure>

                    <figure>
                        <img src={`${ASSETS}/media-panel.jpg`}/>
                        <figcaption>У дрона есть своя приборная панель как у настоящего самолёта!</figcaption>
                    </figure>
                </CaseMedia>
            </CaseContent>
        </Case>
    );
}
