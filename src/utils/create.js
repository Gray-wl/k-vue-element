export const create = (Vue, component, props) => {
  const _vm = new Vue({
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

  return comp;
}
