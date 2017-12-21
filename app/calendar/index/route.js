import Route from '@ember/routing/route';

import moment from 'moment';

export default Route.extend({

  activate() {
    console.log('activating');

    const now = moment();

    this.replaceWith(`/calendar/${now.year()}/${now.month() + 1}`);
  }

});
