import EmberObject from '@ember/object';
import GoogleTrackingMixin from 'calendar-demo/mixins/google-tracking';
import { module, test } from 'qunit';

module('Unit | Mixin | google tracking');

// Replace this with your real tests.
test('it works', function(assert) {
  let GoogleTrackingObject = EmberObject.extend(GoogleTrackingMixin);
  let subject = GoogleTrackingObject.create();
  assert.ok(subject);
});
