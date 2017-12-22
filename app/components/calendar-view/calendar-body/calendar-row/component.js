import Component from '@ember/component';
import ComponentBaseMixin from 'calendar-demo/mixins/component-base';

const CalendarBodyRowComponent = Component.extend(ComponentBaseMixin, {
  classPrefix: 'calendar-body__row',

  itemComponent: 'calendar-view/calendar-body/calendar-row/row-item',
});

export default CalendarBodyRowComponent;
