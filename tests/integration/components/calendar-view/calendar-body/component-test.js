import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('calendar-view/calendar-body', 'Integration | Component | calendar view/calendar body', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{calendar-view/calendar-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#calendar-view/calendar-body}}
      template block text
    {{/calendar-view/calendar-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
