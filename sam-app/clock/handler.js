const moment = require('moment');

exports.clock = async(event) => {
    console.log('Clock function run!')

    const message = moment().format();

    const response = {
        statusCode: 200,
        body: JSON.stringify(message)
    };

    return response;
}