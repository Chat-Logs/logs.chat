// Package Info
const packageInfo = require('./package.json');
exports.name = packageInfo.name;
exports.version = packageInfo.version;
// Methods
exports.create = require('./Methods/create');