//This file is considered a module with 2 exports.

exports.perimeter = (x, y) => 2 * (x + y); //"exports" is a keyword from Node, it is a reference for "module.exports", but just "exports" can be used as a short hand. "perimeter" is the method name being exported.
exports.area = (x, y) => x * y;//"area" is the method name being exported.