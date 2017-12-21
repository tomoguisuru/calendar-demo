import Controller from '@ember/controller';
import { computed, get } from '@ember/object';

import moment from 'moment';

const CalendarDetailsController = Controller.extend({
  dateFormat:    'YYYY/MM',

  datesOfTheWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  calendarWeeks: computed('model', function() {
    const date = moment(get(this, 'model'));
    const weeks = [];

    if (!date || !date.isValid()) { return; }

    // Set to the start of the month
    date.startOf('month').startOf('day');

    // clone it
    const endDate = moment(date).endOf('month').endOf('day');

    date.startOf('week');

    while (endDate.isAfter(date)) {
      weeks.push(this.generateWeek(date, endDate.month()));

      date.add(1, 'week');
    }

    return weeks;
  }),

  generateWeek(startOfWeek, selectedMonth) {
    const date = moment(startOfWeek);
    const week = new Array(7);
    const today = moment().startOf('day');
    const formatter = 'YYYY/MM/DD';

    let i = 0;

    while (i < 7) {
      week[date.day()] = {
        date:            date.clone(),
        isSelectedMonth: date.month() === selectedMonth,
        isToday:         date.format(formatter) === today.format(formatter),
        isPast:          date.isBefore(today),
      };

      date.add(1, 'day');
      i++;
    }

    return week;
  },

  actions: {

    changeMonth(shouldIncrease = true) {
      const model = get(this, 'model');

      if (shouldIncrease) {
        model.add(1, 'month');
      } else {
        model.subtract(1, 'month')
      }

      this.transitionToRoute(`/calendar/${model.format(get(this, 'dateFormat'))}`, model);
    }

  },
});

export default CalendarDetailsController;
