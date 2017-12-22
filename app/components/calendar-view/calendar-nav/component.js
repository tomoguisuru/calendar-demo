import Component from '@ember/component';
import ComponentBaseMixin from 'calendar-demo/mixins/component-base';

const CalendarNavComponent = Component.extend(ComponentBaseMixin, {
  classPrefix: 'calendar-nav',

  navComponent: 'calendar-view/calendar-nav/nav-content',
});

export default CalendarNavComponent;
