import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Mixin.create({

  metrics: service(),

  /**
   * Send a google tracking event
   *
   * @param {string} category - ex "Videos", "Outbound Link"
   * @param {string} action - ex "play", "click"
   * @param {string} label - ex "Fall Campaign", "http://example.com/#link"
   * @private
   */
  _trackEvent(category, action, label) {
    get(this, 'metrics').trackEvent('GoogleAnalytics', {
      category,
      action,
      label,
    });
  }
});
