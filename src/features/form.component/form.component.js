import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

@inject('stores') @observer
export default class FormComponent extends Component {
  render() {
    console.log(this.props.stores);
    return (<h1>Form</h1>);
  }
}


