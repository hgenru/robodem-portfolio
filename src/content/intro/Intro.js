import React from 'react';
import './Intro.css';

const YOUTUBE_EMBDED_CODE = 'ntK0wxP7Las';
const YOUTUBE_URL = `https://www.youtube.com/embed/${YOUTUBE_EMBDED_CODE}?` +
    `controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${YOUTUBE_EMBDED_CODE}`;

export default function Intro() {
    return (
        <div className="intro_section_wrapper">
            <div className="video">
                <div className="video__background">
                    <div className="video__foreground">
                        <iframe src={YOUTUBE_URL} frameborder="0" allowfullscreen/>
                    </div>
                </div>
            </div>
            <section className="intro_section content">
                <header className="intro_section__header">
                    <h1 className="intro_section__head">Robodem</h1>
                    <p className="intro_section__text">
                        Разработаем системы, которые «видят» окружающие предметы и самостоятельно работают с ними.
                    </p>
                    <p className="intro_section__text">
                        <a className="intro_section__link" href="mailto: a.ershov@robodem.com">
                            a.ershov@robodem.com
                        </a>
                        <a className="intro_section__link" href="tel:+7 (925) 328-57-55">
                            +7 (925) 328-57-55
                        </a>
                    </p>
                </header>
            </section>
        </div>
    );
}
