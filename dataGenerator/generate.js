var fs = require('fs');
var Chance = require('chance');
require('babel-core/register')({ ignore: '/node_modules\/' });

var chance = new Chance();

var db = {};
db.customers = require('./customers')(db, chance);
db.categories = require('./categories')(db, chance);
db.products = require('./products')(db, chance);
db.commands = require('./commands')(db, chance);
db.reviews = require('./reviews')(db, chance);
require('./finalize')(db, chance);

fs.writeFileSync(__dirname + '/../js/data.js', 'module.exports = ' + JSON.stringify(db));
console.log('data.js file updated');
