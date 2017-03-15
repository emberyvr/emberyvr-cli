import Ember from 'ember';
const {
  Controller,
  computed,
} = Ember;

export default Controller.extend({
  /** @type {Company[]} */
  companies: computed.alias('model'),
});
