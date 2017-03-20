import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

@inject('stores') @observer
export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: props.stores.form.getForm()
    };
  }

  render() {
    return (
      <form>
        <label htmlFor={this.state.form.$('email').id}>
          {this.state.form.$('email').label}
        </label>
        <input {...this.state.form.$('email').bind()} />
        <p>{this.state.form.$('email').error}</p>

        <label htmlFor={this.state.form.$('password').id}>
          {this.state.form.$('password').label}
        </label>
        <input {...this.state.form.$('password').bind({type: 'password'})} />
        <p>{this.state.form.$('password').error}</p>

        <button type="submit" onClick={this.state.form.onSubmit}>Submit</button>
        <button type="button" onClick={this.state.form.onReset}>Reset</button>
        <button type="button" onClick={this.state.form.onClear}>Clear</button>

        <p>{this.state.form.error}</p>
      </form>

    );
  }
}


