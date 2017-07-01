import FontFaceObserver from 'fontfaceobserver';

export default function loadFonts() {
    const font = new FontFaceObserver('Roboto');
    const FONTS_NOT_LOADED = 'fonts--not-loaded';
    const FONTS_LOADED = 'fonts--loaded'
    const root = document.documentElement;
    root.classList.add(FONTS_NOT_LOADED);
    font.load(null, 5000).then(() => {
        root.classList.remove(FONTS_NOT_LOADED);
        root.classList.add(FONTS_LOADED);
    }, () => {
        root.classList.remove(FONTS_NOT_LOADED);
    });
}

if (global.window) {
    loadFonts();
}
