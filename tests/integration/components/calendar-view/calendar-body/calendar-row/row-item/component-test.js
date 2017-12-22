import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

moduleForComponent('calendar-view/calendar-body/calendar-row/row-item', 'Integration | Component | calendar view/calendar body/calendar row/row item', {
  integration: true
});

test('it renders', function(assert) {
  const today = moment();
  this.set('day', {
    date: today,
  });

  this.render(hbs`{{calendar-view/calendar-body/calendar-row/row-item day=day}}`);

  assert.equal(this.$().text().trim(), today.format('D'));

  // Template block usage:
  this.render(hbs`
    {{#calendar-view/calendar-body/calendar-row/row-item}}
      template block text
    {{/calendar-view/calendar-body/calendar-row/row-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
