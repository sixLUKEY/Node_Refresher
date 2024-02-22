const configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function(){
        return configValues.connectionString
    }
}