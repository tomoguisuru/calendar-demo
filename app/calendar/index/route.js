import Route from '@ember/routing/route';

import moment from 'moment';

export default Route.extend({

  activate() {
    const now = moment();

    this.replaceWith(`/calendar/${now.format('YYYY/MM')}`);
  }

});
