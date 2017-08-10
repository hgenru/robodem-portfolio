import React from 'react';
import * as C from '../../../components/case';

import descriptionText from './description.md';


export default function CaseDrone() {
    return (
        <C.Case>
            <C.CaseText>{descriptionText}</C.CaseText>
            <C.CaseYoutubeWrapper>
                <iframe
                    src="https://www.youtube.com/embed/jWDcy073kRQ"
                    frameborder="0"
                    allowfullscreen
                />
            </C.CaseYoutubeWrapper>
        </C.Case>
    );
}
