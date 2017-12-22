import Component from '@ember/component';
import ComponentBaseMixin from 'calendar-demo/mixins/component-base';

import { computed, get, getProperties } from '@ember/object';

import moment from 'moment';

const CalendarBodyRowItemComponent = Component.extend(ComponentBaseMixin, {
  classPrefix: 'calendar-body__row-item',

  classNameBindings: [
    'isMuted:isMuted',
    'day.isPast:isPast',
  ],

  day: null,

  date:   computed.alias('day.date'),
  active: computed.alias('day.isToday'),

  isMuted: computed('day.isSelectedMonth', function() {
    const day = get(this, 'day');

    if (!day) { return; }

    return !get(day, 'isSelectedMonth');
  }),

  filteredEvents: computed('date', 'events.@each.launch_date', function() {
    const { date, events } = getProperties(this, ['date', 'events']);

    if (!events || !date || date && !date.isValid()) { return; }

    return events.filter(event => {
      const eventDate = moment(get(event, 'launch_date'));
      return eventDate.isSame(date, 'day');
    });
  }),
});

export default CalendarBodyRowItemComponent;
