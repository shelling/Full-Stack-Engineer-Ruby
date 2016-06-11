window.Mixin = (window.Mixin || {});
window.Mixin.Form = {
  update: function(keys, action) {
    let key = null;
    while (key = keys.pop()) {
      let tmp = {};
      tmp[key] = action;
      action = tmp;
    }
    this.setState(React.addons.update(this.state, action));
  },

  set: function(name, value) {
    this.update(name.split(/\./), { $set: value });
  },

  get: function(name) {
    let keys = name.split(/\./);
    let tmp = this.state;
    let key = null;
    while (key = keys.shift()) {
      tmp = tmp[key];
    }
    return tmp;
  },

  splice: function(name, array) {
    this.update(name.split(/\./), { $splice: array });
  },

  replace: function(name, origin, current) {
    let index = this.get(name).indexOf(origin);
    if (index > -1) {
      this.splice(name, [[index, 1, current]]);
    }
  },
}
