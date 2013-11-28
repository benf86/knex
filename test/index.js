// Helps with error handling on errors swallowed by promises.
require("mocha-as-promised")();

global.sinon = require("sinon");

var chai       = global.chai = require("chai");

chai.use(require("chai-as-promised"));
chai.use(require("sinon-chai"));
chai.should();

var Promise = global.testPromise    = require('../lib/promise').Promise;
global.expect         = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion      = chai.Assertion;
global.assert         = chai.assert;

Promise.longStackTraces();

// Unit tests
describe('Unit Tests', function() {
  require('./unit/knex');
  require('./unit/common');
  require('./unit/builder');
  require('./unit/builder/joinclause');
  require('./unit/raw');
  require('./unit/transaction');
  require('./unit/clients/pool');
  require('./unit/clients/base');
  require('./unit/clients/base/grammar');
  require('./unit/clients/base/schemagrammar');
  require('./unit/clients/server/base');
  require('./unit/clients/server/mysql');
  require('./unit/clients/server/postgres');
  require('./unit/clients/server/sqlite3');
});

// Integration Tests
describe('Integration Tests', function() {

  var helper = require('./integration/helper');

  before(function() {
    helper.setLib(this);
  });

  require('./integration/knex');

  after(function() {
    helper.writeResult();
  });

});

// Benchmarks
describe('Benchmarks', function() {


});
