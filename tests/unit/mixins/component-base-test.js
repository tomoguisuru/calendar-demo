import EmberObject from '@ember/object';
import ComponentBaseMixin from 'calendar-demo/mixins/component-base';
import { module, test } from 'qunit';

module('Unit | Mixin | component base');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentBaseObject = EmberObject.extend(ComponentBaseMixin);
  let subject = ComponentBaseObject.create();
  assert.ok(subject);
});
