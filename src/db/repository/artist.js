const models = require('../models');

async function findAll(args) {
  let results = null;
  await models.Artist.findAll(args).then(res => results = res).catch(err => results = err);
  return results;
}

module.exports = {
  findAll
};

