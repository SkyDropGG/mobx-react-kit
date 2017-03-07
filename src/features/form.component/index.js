import FormComponent from './form.component';

export default {
  path: 'form',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./form.component').default)
    })
  }
};
