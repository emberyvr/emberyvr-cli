import Ember from 'ember';
const {
  Component
} = Ember;

/**
 * YVR Company Card
 *
 * ## Example Usage:
 * ```
 * {{yvr/company-card company=(readonly company)}}
 * ```
 *
 * @class YvrCompanyCard
 * @extends Ember.Component
 */
export default Component.extend({
  classNames: 'yvr-company-card card',

  /**
   * @property {Company} company
   * @default null
   * @public
   */
  company: null,
});
