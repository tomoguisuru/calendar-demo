import pad from 'calendar-demo/utils/pad';
import { module, test } from 'qunit';

module('Unit | Utils | pad');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(pad(9), '09', '9 Pads to 09 (defaults to 2)');
  assert.equal(pad(9, 1), '9', '9 Pads to 9 when places set to 1');
  assert.equal(pad(9, 2, '#'), '#9', '9 Pads to #9 when using padChar');

  assert.equal(pad(12, 2), '12', '12 Pads to 12');
  assert.equal(pad(12, 3), '012', '12 Pads to 012');
});
