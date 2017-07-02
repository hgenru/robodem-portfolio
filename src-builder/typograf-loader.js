const loaderUtils = require('loader-utils');
const Typograf = require('typograf');

const defaultOptions = {locale: ['ru', 'en-US']}

module.exports = function(content) {
    this.cacheable && this.cacheable();
    this.value = content;

    const options = loaderUtils.getOptions(this);

    const tp = new Typograf(Object.assign({}, defaultOptions, options));
    tp.enableRule('ru/optalign/*');
    tp.enableRule('common/html/processingAttrs');
    tp.setSetting('common/html/processingAttrs', 'attrs', ['title', 'placeholder', 'alt']);
    const result = tp.execute(content) || content;

    return result;
};
