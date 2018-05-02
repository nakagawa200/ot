"use strict";
exports.__esModule = true;
require("core-js");
require('zone.js/dist/zone');
if (process.env.NODE_ENV === 'production') {
    // Production
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
