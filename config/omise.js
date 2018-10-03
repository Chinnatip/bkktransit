const config = require("./config");
const omise = require('omise')({
    secretKey: config.omise.secretKey,
    publicKey: config.omise.publicKey,
    omiseVersion: config.omise.omiseVersion
});

module.exports = function () {
    return omise;
}
