import { test } from 'qunit';
import moduleForAcceptance from 'calendar-demo/tests/helpers/module-for-acceptance';
import moment from 'moment';

moduleForAcceptance('Acceptance | calendar');

test("visiting /calendar redirects to today's month view", function(assert) {
  visit('/calendar');

  andThen(function() {
    const today = moment();

    assert.equal(currentURL(), `/calendar/${today.format('YYYY/MM')}`);
  });
});

test("Invalid date redirects to today's month view", function(assert) {
  visit('/calendar/2017/14');

  andThen(function() {
    const today = moment();

    assert.equal(currentURL(), `/calendar/${today.format('YYYY/MM')}`);
  });
});

test('Can visit specific year/month', function(assert) {
  visit('/calendar/2016/05');

  andThen(function() {
    assert.equal(currentURL(), '/calendar/2016/05');
  });
});

test('Can increase month view', function(assert) {
  visit('/calendar');
  const today = moment();

  andThen(function() {
    assert.equal(currentURL(), `/calendar/${today.format('YYYY/MM')}`);
  });

  click('.calendar-nav .decrease-month');

  andThen(function() {
    today.subtract(1, 'month');
    assert.equal(currentURL(), `/calendar/${today.format('YYYY/MM')}`);
  });
});

test('Can decrease month view', function(assert) {
  visit('/calendar');
  const today = moment();

  andThen(function() {
    assert.equal(currentURL(), `/calendar/${today.format('YYYY/MM')}`);
  });

  click('.calendar-nav .increase-month');

  andThen(function() {
    today.add(1, 'month');
    assert.equal(currentURL(), `/calendar/${today.format('YYYY/MM')}`);
  });
});
