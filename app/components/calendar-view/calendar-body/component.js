import Component from '@ember/component';
import ComponentBaseMixin from 'calendar-demo/mixins/component-base';

import { get, computed } from '@ember/object';

import moment from 'moment';

const CalendarBodyComponent = Component.extend(ComponentBaseMixin, {
  classPrefix: 'calendar-body',

  daysOfTheWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  events:        [],

  rowComponent: 'calendar-view/calendar-body/calendar-row',

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
    const today = moment().startOf('day');
    const week = new Array(7);
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
});

export default CalendarBodyComponent;
