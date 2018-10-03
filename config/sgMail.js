const config = require("./config");
const sgMail = require('@sendgrid/mail');

module.exports = function () {
    sgMail.setApiKey(config.sendgrid.apiKey);
    return sgMail;
}