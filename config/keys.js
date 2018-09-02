// module.exports = {
//     mongoURI: "mongodb://CryptRBit:johnrexwhit1@ds133252.mlab.com:33252/flex-project",
//     secretOrKey: "5qQmsFwc8jzz1GaLpYKAFGB71RKj5qwD"
// };
//
// keys.js
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}
