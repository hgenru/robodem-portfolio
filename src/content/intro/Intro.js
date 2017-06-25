import React from 'react';
import './Intro.css';

export default function Intro() {
    return (
        <section className="intro_section">
            <header className="intro_section__header">
                <h1 className="intro_section__head">Robodem</h1>
                <p className="intro_section__text">
                    Разработаем системы, которые «видят» окружающие предметы и самостоятельно работают с ними.
                </p>
            </header>
        </section>
    );
}
