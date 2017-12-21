import DS from 'ember-data';

const {
  Transform,
} = DS;

import moment from 'moment';

export default Transform.extend({
  deserialize(serialized) {
    return serialized.format('YYYY-MM-DD HH:mm:ss');
  },

  serialize(deserialized) {
    return moment(deserialized, 'YYYY-MM-DD HH:mm:ss');
  }
});
