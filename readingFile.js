const fs = require('fs');

// function to read json file synchronously. 
function jsonReader() {
    try {
        const jsonString = fs.readFileSync('./Test JSON.json')
        const userActivity = JSON.parse(jsonString)
        return userActivity;
    }
    catch (err) {
        console.log(err);
        return
    }
}
module.exports = jsonReader;
