import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import {
  belongsTo,
  // hasMany
} from 'ember-data/relationships';

export default Contentful.extend({
  description: attr('string'),
  name: attr('string'),
  pathName: attr('string'),
  
  logo: belongsTo('contentful-asset'),
});
