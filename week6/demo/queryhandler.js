
var debug = require('debug')('demo:queryHandler');

function search(query) {
  debug(query);
  debug(where);
  var where = {};
  var key;
  for (key in query) {
    if (key.indexOf('_') === -1) {
      // (test1|test3) = .replace(/[\W_]+/g,'')
      where[key] = { $regex: new RegExp('.*?' + req.query[key] + '.*') };
    }
  }
  return where;
}

function sort(query) {
  debug('sort setup');
  var options = {};
  var key;
  for (key in query) {
    if (key.indexOf('_') === -1) {
      // (test1|test3) = .replace(/[\W_]+/g,'')
      options[key] = { $regex: new RegExp('.*?' + req.query[key] + '.*') };
    }
  }
  
}

module.exports.cors = function () {
  return function (req, res, next) {
    debug(req);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();

  };
};

module.exports.search = function (req, res, next) {
  return function (req, res, next) {
    req.where = search(req.query);
    next();
  };

};


module.exports.sort = function () {
  return function (req, res, next) {
    // Add the options sort functionality to the request object
    if (!req.options) req.options = {};
    req.options.sort = sort(req.query);
    next();
  };
};