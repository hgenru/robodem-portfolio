import FontFaceObserver from 'fontfaceobserver';


const FONTS_LOAD_TIMEOUT = 5000;
const MAX_PAGE_LOAD_TIME = 3000;
const FONTS_NOT_LOADED_CLASS = 'fonts--not-loaded';

export default function loadFonts() {
    const root = document.documentElement;
    const removeClass = () => root.classList.remove(FONTS_NOT_LOADED_CLASS);
    try {
        if ('navigationStart' in window.performance.timing) {
            const loadTime = Date.now() - window.performance.timing.navigationStart;
            if (loadTime > FONTS_LOAD_TIMEOUT) {
                return;  // if page load on very bad internet avoid FOIT 
            }
        }
        const robotoRegular = new FontFaceObserver('Roboto', {weight: 400});
        const robotoBold = new FontFaceObserver('Roboto', {weight: 700});

        root.classList.add(FONTS_NOT_LOADED_CLASS);
        Promise.all([
            robotoRegular.load(null, FONTS_LOAD_TIMEOUT),
            robotoBold.load(null, FONTS_LOAD_TIMEOUT)
        ]).then(removeClass, removeClass);
    } catch (e) {
        removeClass();
    }

}

if (global.window) {
    loadFonts();
}
