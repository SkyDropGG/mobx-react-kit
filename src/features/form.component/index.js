export default {
  path: 'form',
  getComponent(nextState, cb) {
    // Stories.inject('form', new FormStore());
    require.ensure([], (require) => {
      return cb(null, require('./form.component.js').default)
    }, 'form')
  }
};
