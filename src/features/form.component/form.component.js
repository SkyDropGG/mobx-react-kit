import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

@inject('stores') @observer
export default class FormComponent extends Component {
  render() {
    return (<h1>Form</h1>);
  }
}


