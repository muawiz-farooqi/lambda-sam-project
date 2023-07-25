const moment = require('moment-timezone')

exports.convertTime = async(event) => {
    console.log('Convert Time was executed');

    let tz = event.queryStringParameters && event.queryStringParameters.tz
    
    let formattedDate = moment().format();

    if (tz !== null)
    {
        formattedDate = moment().tz(tz).format();
    } else
    {
        tz = "GMT 0"
    }

    const message = "The time in " + tz + " is " + formattedDate;

    const response = {
        statusCode: 200,
        body: JSON.stringify(message)
    };
    
    return response;
}