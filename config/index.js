
const envConfig = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${envConfig.username}:${envConfig.password}@ds153710.mlab.com:53710/heroku_z5bdpg1d`;
    }
}
