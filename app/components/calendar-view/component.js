import Component from '@ember/component';
import ComponentBaseMixin from 'calendar-demo/mixins/component-base';

const CalendarViewComponent = Component.extend(ComponentBaseMixin, {
  classPrefix: 'calendar',

  bodyComponent: 'calendar-view/calendar-body',
  heroComponent: 'calendar-view/calendar-hero',
  navComponent:  'calendar-view/calendar-nav',
});

export default CalendarViewComponent;
