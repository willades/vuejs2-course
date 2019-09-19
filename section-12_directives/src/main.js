import Vue from 'vue'
import App from './App.vue'


Vue.directive("highlight", {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000
    }
    setTimeout(() => {
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
});

// Directive lifecycle hooks:
// bind(el, binding, vnode) > Once directive is attached
// inserted(el, binding, vnode) > Inserted in Parent Node
// update(el, binding, vnode, oldVnode) > Once component
//   is updated (without children)
// componentUpdated(el, binding, vnode, oldVnode) > Once
//   component is updated (With children)
// unbind(el, binding, vnode) > Once directive is removed
// Note: binding, vnode should only be treated as "read-only"

new Vue({
  el: '#app',
  render: h => h(App)
})
