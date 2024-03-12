
const { CustomException } = require('./Exception');

class NotFoundException extends CustomException {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}

module.exports = { NotFoundException };
