export const create = (Vue, component, props) => {

  // extend
  const Constructor = Vue.extend(component);
  const _vm = new Constructor({
    el: document.createElement('div'),
    data: props,
    methods: {
      remove() {
        document.body.removeChild(_vm.$el);
        _vm.$destroy();
      }
    }
  });

  document.body.appendChild(_vm.$el);

  return _vm;

  // new Vue
  /*const _vm = new Vue({
    render: h => {
      return h(component, {props});
    }
  });

  _vm.$mount();

  document.body.appendChild(_vm.$el);

  const comp = _vm.$children[0];

  comp.remove = () => {
    document.body.removeChild(_vm.$el);
    _vm.$destroy();
  }

  return comp;*/
}
