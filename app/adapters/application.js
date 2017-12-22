import DS from 'ember-data';

const {
  RESTAdapter,
} = DS;

const ApplicationAdapter = RESTAdapter.extend({
  namespace: 'v1',
  host:      'https://api.awesome-sauce.io',
});

export default ApplicationAdapter;
