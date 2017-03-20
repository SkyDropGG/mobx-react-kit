import {observable, action, computed, asMap} from 'mobx'

class Stores {
  @observable storesList = asMap({});

  @computed get getStores() {
    return this.storesList.toJS();
  }

  @action inject(tag, store) {
    if (this.storesList.has(tag)) {
      console.error('This tag already used.');
      return;
    }
    this.storesList.set(tag, store);
  }
}

export default {
  storesInstance: null,
  getInstance: function() {
    if (!this.storesInstance) {
      this.storesInstance = new Stores();
    }
    return this.storesInstance;
  }
};
