const Entities = require('html-entities').AllHtmlEntities;
const e = new Entities();
const xmlTagRegex = new RegExp(/<\?xml(.*?)?>/, 'gi');
const nsRegex = new RegExp(/xmlns(.*?)"(.*?)"/, 'gi');

exports.translate = function (load) {
  load.metadata.format = 'es6';
  load.source = load.source.replace(xmlTagRegex, '');
  load.source = load.source.replace(nsRegex, '');

  // if we found a leading < we expect that we have proper html
  load.source = `export default \`${load.source}\`;`;
};
