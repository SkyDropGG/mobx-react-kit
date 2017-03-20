import {observable, action} from 'mobx'
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

const plugins = {dvr: validatorjs};

class LoginForm extends MobxReactForm {
  onSuccess(form) {
    console.log('Form Values!', form.values());
  }

  onError(form) {
    form.invalidate('This is a generic error message!');
  }

  onChange(form) {
    console.log(form)
  }
}

export default class FormStore {
  @observable fields = {
    email: {
      label: 'Email',
      placeholder: 'Insert Email',
      rules: 'required|email|string|between:5,25',
      type: 'text'
    },
    password: {
      label: 'Password',
      placeholder: 'Insert Password',
      rules: 'required|string|between:5,25',
    },
  };

  getForm() {
    return new LoginForm({fields: this.fields}, {plugins});
  }
}
