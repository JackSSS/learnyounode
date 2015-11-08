'use strict';

var http = require('http');
var result = '';

http.get(process.argv[2], function(req) {
  req.on('data', function(data) {
    result += data;
  });

  req.on('error', function() {
  });

  req.on('end', function() {
    console.log(result.length);
    console.log(result);
  });
});
