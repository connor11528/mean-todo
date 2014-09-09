var rootPath = require('path').resolve(__dirname + '../../..');

module.exports = {
  development: {
    root: rootPath,
    db: 'mongodb://localhost/mean-todo'
  },
  test: {
    root: rootPath,
    db: 'mongodb://localhost/your_app_db_test'
  },
  staging: {
    root: rootPath,
    db: process.env.MONGOHQ_URL
  },
  production: {
    root: rootPath,
    db: process.env.MONGOHQ_URL
  }
};

// 'mongodb://ame:ame@mongo.onmodulus.net:27017/qurawu3R'