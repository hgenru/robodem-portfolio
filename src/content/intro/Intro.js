import React from 'react';
import './Intro.css';

const YOUTUBE_EMBDED_CODE = 'ntK0wxP7Las';
const YOUTUBE_URL = `https://www.youtube.com/embed/${YOUTUBE_EMBDED_CODE}?` +
    `controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${YOUTUBE_EMBDED_CODE}`;

export default function Intro() {
    return (
        <div>
            <div className="intro_nav_top_container">
                <nav className="intro_nav_top">
                    <ul class="content">
                        <li><a href="http://robodem.ru/about">О компании</a></li>
                        <li><a href="http://robodem.ru/media">СМИ о нас</a></li>
                        <li><a href="http://robodem.ru/blog">Блог</a></li>
                        <li><a href="http://robodem.ru/contacts">Коонтакты</a></li>
                    </ul>
                </nav>
            </div>
            <div className="intro_content_fixed_container">
                <div className="intro_video">
                    <div className="intro_video__background">
                        <div className="intro_video__foreground">
                            <iframe src={YOUTUBE_URL} frameborder="0" allowfullscreen/>
                        </div>
                    </div>
                </div>
                <section className="intro_content">
                    <div className="content">
                        <header className="intro_content__header">
                            <h1 className="intro_content__head">Robodem</h1>
                            <p className="intro_content__text">
                                Разработаем системы, которые «видят» окружающие предметы и самостоятельно работают с ними.
                            </p>
                            <p className="intro_content__text">
                                <div className="intro_content__link_block">
                                    <a href="mailto: a.ershov@robodem.com">
                                        a.ershov@robodem.com
                                    </a>
                                </div>
                                <div className="intro_content__link_block">
                                    <a href="tel:+7 (925) 328-57-55">
                                        +7 (925) 328-57-55
                                    </a>
                                </div>
                            </p>
                        </header>
                    </div>
                </section>
            </div>
        </div>
    );
}
