import React from 'react';
import './Intro.css';

const YOUTUBE_EMBDED_CODE = 'ucfvR-kzv30';
const YOUTUBE_URL = `https://www.youtube.com/embed/${YOUTUBE_EMBDED_CODE}?` +
    `controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${YOUTUBE_EMBDED_CODE}`;

function YoutubeBackVideo() {
    if (global.window) {
        var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 1000);
        if (viewportWidth > 768) {
            return (<iframe src={YOUTUBE_URL} frameborder="0" allowfullscreen/>);
        }
    }
    return null;
}

export default class Intro extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    toggleMenu() {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    render() {
        const {isMenuOpen} = this.state;
        return (
            <div>
                <div className="intro_nav_top_container">
                    <nav className={"intro_nav_top" + (!isMenuOpen ? " intro_nav_top--hidden" : "")}>
                        <ul className="content">
                            <li><a href="http://robodem.ru/about">О компании</a></li>
                            <li><a href="http://robodem.ru/media">СМИ о нас</a></li>
                            <li><a href="http://robodem.ru/blog">Блог</a></li>
                            <li><a href="http://robodem.ru/contacts">Контакты</a></li>
                        </ul>
                    </nav>
                    <button
                        className={"menu_button" + (isMenuOpen ? " menu_button--open" : "")}
                        onClick={() => this.toggleMenu()}
                    >
                        <div className="menu_button_sticks_container">
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </button>
                </div>
                <div className="intro_fixed_container">
                    <div className="intro_video">
                        <div className="intro_video__background">
                            <div className="intro_video__foreground">
                                <YoutubeBackVideo/>
                            </div>
                        </div>
                    </div>
                    <section className="intro">
                        <div className="content">
                            <header className="intro__header">
                                <h1 className="intro__head">Robodem</h1>
                                <p className="intro__text">
                                    Разработаем системы, которые «видят» окружающие предметы и самостоятельно работают с ними.
                                </p>
                                <p className="intro__text">
                                    <div className="intro__link_block">
                                        <a href="mailto: a.ershov@robodem.com">
                                            a.ershov@robodem.com
                                        </a>
                                    </div>
                                    <div className="intro__link_block">
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
}
