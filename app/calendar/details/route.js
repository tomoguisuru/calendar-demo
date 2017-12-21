import Route from '@ember/routing/route';
import pad from 'calendar-demo/utils/pad';

import moment from 'moment';

export default Route.extend({

  titleToken(model) {
    if (!model) { return; }

    return model.format('MMM YYYY');
  },

  model(params) {
    let { year, month } = params;

    month = pad(month);

    const model = moment(`${year}/${month}`, 'YYYY/MM');

    if (!model.isValid()) {

      const now = moment();

      this.replaceWith(`/calendar/${now.format('YYYY/MM')}`);
    } else {
      return model;
    }
  }
});
