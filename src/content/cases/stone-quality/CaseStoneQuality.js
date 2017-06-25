import React from 'react';
import Case from '../../../components/case/Case.js';
import CaseContent from '../../../components/case/CaseContent.js';
import CaseHeader from '../../../components/case/CaseHeader.js';
import CaseText from '../../../components/case/CaseText.js';
import CaseMedia from '../../../components/case/CaseMedia.js';

const HEADER_PICTURE = 'https://pp.userapi.com/c639619/v639619694/26253/v5MTsPQ2Q0o.jpg';
const TEXT = `
Раньше работники ювелирного завода вручную сортировали камни, на глаз определяя форму и наличие брака. Иногда сотрудники делали ошибки, а некоторые из них даже попадались на воровстве. Владелец завода попросил разработать аппарат, который сам сортирует драгоценные камни.
Как это работает:
Вы загружаете камни в ящик. С помощью камер машина за долю секунды создает 3D-модель каждого алмаза. Затем система анализирует, есть ли на камне сколы или другие дефекты, обработан он или нет, считывает размеры и форму. Еще через секунду камень попадает в соответствующий отсек.
Теги: контроль качества, компьютерное зрение, автоматизация производства
`;

export default function CaseStoneQuality() {
    return (
        <Case>
            <CaseHeader picture={HEADER_PICTURE}>
                Контроль качества драгоценных камней
            </CaseHeader>
            <CaseContent>
                <CaseText>{TEXT}</CaseText>
                <CaseMedia>
                    <figure>
                        <img src="https://pp.userapi.com/c836624/v836624778/49b95/GdGbo2ty2o4.jpg"/>
                        <figcaption>Описание картинки номер один</figcaption>
                    </figure>

                    <figure>
                        <img src="https://pp.userapi.com/c836624/v836624778/49b95/GdGbo2ty2o4.jpg"/>
                        <figcaption>Описание картинки номер два</figcaption>
                    </figure>
                </CaseMedia>
            </CaseContent>
        </Case>
    );
}
