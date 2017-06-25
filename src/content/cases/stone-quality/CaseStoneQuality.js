import React from 'react';
import Case from '../../../components/case/Case.js';
import CaseHeader from '../../../components/case/CaseHeader.js';
import CaseContent from '../../../components/case/CaseContent.js';
import CaseDescription from '../../../components/case/CaseDescription.js';
import CaseDescriptionText from '../../../components/case/CaseDescriptionText.js';
import CaseDescriptionBlueprint from '../../../components/case/CaseDescriptionBlueprint.js';
import CaseMedia from '../../../components/case/CaseMedia.js';

const ASSETS = './cases/stone-quality';
const HEADER_PIC = `${ASSETS}/header-pic.png`;
const BLUEPRINT_PIC = `${ASSETS}/blueprint.png`;

const TEXT = `
Раньше работники ювелирного завода вручную сортировали камни, на глаз определяя форму и наличие брака. Иногда сотрудники делали ошибки, а некоторые из них даже попадались на воровстве. Владелец завода попросил разработать аппарат, который сам сортирует драгоценные камни.
Как это работает:
Вы загружаете камни в ящик. С помощью камер машина за долю секунды создает 3D-модель каждого алмаза. Затем система анализирует, есть ли на камне сколы или другие дефекты, обработан он или нет, считывает размеры и форму. Еще через секунду камень попадает в соответствующий отсек.
`;

export default function CaseStoneQuality() {
    return (
        <Case>
            <CaseHeader picture={HEADER_PIC}>
                Контроль качества драгоценных камней
            </CaseHeader>
            <CaseContent>
                <CaseDescription>
                    <CaseDescriptionText>{TEXT}</CaseDescriptionText>
                    <CaseDescriptionBlueprint picture={BLUEPRINT_PIC}/>
                </CaseDescription>
                <CaseMedia>
                    <figure>
                        <img src={`${ASSETS}/media-quality-screen.jpg`} />
                        <figcaption>У этого камушка есть скол, он стоит дёшево и улетает в корзину</figcaption>
                    </figure>

                    <figure>
                        <img src={`${ASSETS}/media-quality-screen.jpg`} />
                        <figcaption>У этого камушка есть скол, он стоит дёшево и улетает в корзину</figcaption>
                    </figure>
                </CaseMedia>
            </CaseContent>
        </Case>
    );
}
