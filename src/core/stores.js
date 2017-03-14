export default {
  stores: {},
  inject: function (name, store) {
  if (this.stores[name]) {
    return;
  }
  this.stores[name] = store;
}
};
