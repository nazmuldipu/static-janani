// scripts/nested.js
"use strict";
var zippy = () => "HALLO MARSHMALLOW woman";

// scripts/sample.js
var foo = zippy();

// pages/sample/index-defer.js
console.log("foo bar foobar barfoo bar foo", foo);
