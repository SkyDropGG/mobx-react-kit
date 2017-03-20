import {observable, action} from 'mobx'

export default class FormStore {
  @observable actionsList = 'asdasdsad';
  @action addAction(actionName) {
    this.actionsList.push(actionName);
  }
}
