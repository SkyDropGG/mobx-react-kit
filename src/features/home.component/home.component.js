import React, {Component, PropTypes} from 'react'
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router';

@inject('stores')
@observer
class HomeComponent extends Component {
  render() {
    const {actionsList} = this.props.stores.home;
    console.log( this.props.stores.home);
    return (<div>
      hello
      <ul>
        {actionsList.map(el => {
          return <li>{el}</li>
        })}
      </ul>
      <input onBlur={this.addAction.bind(this)} type="text"/>
      <Link to={'form'}>Go form</Link>
    </div>);
  }
  addAction(e) {
    this.props.stores.home.addAction(e.target.value);
  }
}

export default HomeComponent;