import React, {Component, PropTypes} from 'react'
import {observer, inject} from 'mobx-react';

@inject('homeStore')
@observer
class HomeComponent extends Component {
  render() {
    const {actionsList} = this.props.homeStore;
    return (<div>
      hello
      <ul>
        {actionsList.map(el => {
          return <li>{el}</li>
        })}
      </ul>
      <input onBlur={this.addAction.bind(this)} type="text"/>
    </div>);
  }
  addAction(e) {
    this.props.homeStore.addAction(e.target.value);
  }
}

export default HomeComponent;