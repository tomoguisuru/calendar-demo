import Mixin from '@ember/object/mixin';
import { computed, get } from '@ember/object';
import { isEmpty, isBlank } from '@ember/utils';
import { isArray } from '@ember/array';

const BaseComponentMixin = Mixin.create({

  classNameBindings: [
    'classPrefix',
    '_bdAttrs',
    '_bdColor',
    '_bdFill',
    '_bdClasses',
    'disabled:isDisabled',
    'readonly:isReadonly',
    'active:isActive',
  ],

  attributeBindings: ['role'],

  active:      false,
  disabled:    false,
  readonly:    false,
  classPrefix: '',

  _bdAttrs: computed('bdAttrs', function() {
    let attrs = get(this, 'bdAttrs');

    if (isEmpty(attrs)) {
      return;
    }

    if (!isArray(attrs)) {
      attrs = attrs.split(',');
    }

    return this._reducer(get(this, 'classPrefix'), attrs);
  }),

  _bdColor: computed('bdColor', function() {
    const arr = (get(this, 'bdColor') || '').split(',');

    return this._reducer('color', arr);
  }),

  _bdFill: computed('bdFill', function() {
    const arr = (get(this, 'bdFill') || '').split(',');

    return this._reducer('fill', arr);
  }),

  _bdClasses: computed('bdClasses', function() {
    const arr = (get(this, 'bdClasses') || '').split(',');

    return this._reducer('', arr);
  }),

  preventCallback: computed.or('readonly', 'disabled'),

  _reducer(prefix, collection) {
    if (isEmpty(collection)) { return; }

    return collection.reduce((r, v) => {
      if (!isEmpty(v)) {
        if (isBlank(prefix)) {
          r.push(v.trim());
        } else {
          r.push(`${prefix}--${v.trim()}`);
        }

      }
      return r;
    }, []).join(' ');
  },

  /**
   * Calls the onClick closure action (optional)
   *
   * @event click
   * @param e
   * @returns {*}
   */
  click(e) {
    const onClick = get(this, 'onClick');

    if (onClick) {
      e.preventDefault();

      return onClick();
    }
  },

});

export default BaseComponentMixin;
