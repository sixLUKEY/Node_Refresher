const configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${configValues.username}:${configValues.password}@somemongoosesite`
    }
}