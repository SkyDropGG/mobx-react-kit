import Stores from '../../core/stores'
import FormStore from './form.store';

export default {
  path: 'form',
  getComponent(nextState, cb) {
    Stores.inject('form', new FormStore());
    require.ensure([], (require) => {
      return cb(null, require('./form.component.js').default)
    }, 'form')
  }
};
