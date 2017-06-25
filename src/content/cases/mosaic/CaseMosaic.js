import React from 'react';
import Case from '../../../components/case/Case.js';
import CaseHeader from '../../../components/case/CaseHeader.js';
import CaseContent from '../../../components/case/CaseContent.js';
import CaseDescription from '../../../components/case/CaseDescription.js';
import CaseDescriptionText from '../../../components/case/CaseDescriptionText.js';
import CaseDescriptionBlueprint from '../../../components/case/CaseDescriptionBlueprint.js';
import CaseMedia from '../../../components/case/CaseMedia.js';

const ASSETS = '/cases/mosaic';
const HEADER_PIC = `${ASSETS}/header-pic.png`;
const BLUEPRINT_PIC = `${ASSETS}/blueprint.png`;

const TEXT = `
Раньше работники компании вручную складывали мозаику из керамики. Мы разработали аппарат, который взял мозаику на себя.
Как это работает:
Вы загружаете картинку, робот «в своей голове» делит ее на клетки 64х64. Затем робот сам подбирает кусочки керамики нужного цвета и выкладывает из них мозаику. Оператору не надо возиться с керамикой и сортировать ее по цветам.
Мы делали ПО, а над «железной» частью проекта работала компания «Русский инженер».
Клиент: «Раньше мы использовали ручной труд. Но иногда  ошибались в цвете, и такая лишняя деталь мозаики портила общий вид. Робот решил эту проблему, а к тому же увеличил скорость работы, ведь машине не нужно отдыхать».
`;

export default function CaseMosaic() {
    return (
        <Case>
            <CaseHeader picture={HEADER_PIC}>
                Робот, который складывает мозаику
            </CaseHeader>
            <CaseContent>
                <CaseDescription>
                    <CaseDescriptionText>{TEXT}</CaseDescriptionText>
                    <CaseDescriptionBlueprint picture={BLUEPRINT_PIC}/>
                </CaseDescription>
                <CaseMedia>
                    <figure>
                        <img src={`${ASSETS}/media-mosaic.jpg`}/>
                        <figcaption>Манипулятор раскладывает плиточки в ячейки</figcaption>
                    </figure>
                </CaseMedia>
            </CaseContent>
        </Case>
    );
}
