import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('calendar-view/calendar-nav/nav-content', 'Integration | Component | calendar view/calendar nav/nav content', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{calendar-view/calendar-nav/nav-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#calendar-view/calendar-nav/nav-content}}
      template block text
    {{/calendar-view/calendar-nav/nav-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
