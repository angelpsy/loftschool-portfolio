const staticManifest = require('../staticManifest.js');
const PATHS = require('../../configs/paths');

/**
 *
 */
class Ctrl {
    /**
     * @param {Object} options
     * @param {String} options.template
     * @param {String} options.title
     * @param {String} options.templateName
     */
    constructor(options) {
        this.template = options.template;
        this.title = options.title;
        this.templateName = options.templateName;

        this.getPage = this.getPage.bind(this);
    }

    /**
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    getPage(req, res, next) {
        res.render(this.template, {
            title: this.title,
            staticManifest,
            templateName: this.templateName,
            criticalPrefix: PATHS.criticalPrefix,
        });
    }
}
module.exports = Ctrl;