import {observable, action} from 'mobx'

export default class HomeStore {
  @observable actionsList = [];
  @action addAction(actionName) {
    this.actionsList.push(actionName);
  }
}
