var lazy = require('lazy.js');

var _default = {
  database  : 'bitxstarter_dev',
  username  : 'walle',
  password  : 'eve',

  dialect   : 'postgres',
  protocol  : 'postgres',
  host      : '127.0.0.1',
  port      : 15432,
  native    : true,
  query     : {
    pool    : true,
    debug   : true
  },
  define: {
    timestamps  : true,
    underscored : true,
    charset     : 'utf8'
  },
  logging : console.log,
};

module.exports = {
  development: _default,

  test: lazy(_default).merge({
    database: 'bitxstarter_test'
  }).toObject(),

  production: lazy(_default).merge({
    database: 'bitxstarter_prod'
  }).toObject()
};
