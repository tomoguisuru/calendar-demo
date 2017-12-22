import Route from '@ember/routing/route';

import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

import pad from 'calendar-demo/utils/pad';
import moment from 'moment';

const CalendarDetailsRoute = Route.extend({

  store: service(),

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
  },

  afterModel(model) {
    const start = moment(model).startOf('month').startOf('day');
    const end = moment(model).endOf('month').endOf('day');

    return get(this, 'store').query('event', {
      start_at: start.toISOString(),
      end_at:   end.toISOString()
    }).then(response => {
      const controller = getOwner(this).lookup('controller:calendar.details');

      set(controller, 'events', response);
    });
  },
});

export default CalendarDetailsRoute;
