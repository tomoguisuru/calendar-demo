import DS from 'ember-data';

const {
  RESTSerializer,
} = DS;

const ApplicationSerializer = RESTSerializer.extend({
});

export default ApplicationSerializer;
