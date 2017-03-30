import DS from 'ember-data';
import attr from 'ember-data/attr';
const {
  Model
} = DS;

export default Model.extend({
  description: attr('string'),
  name: attr('string'),
  pathName: attr('string'),

  logo: attr('string')
});
