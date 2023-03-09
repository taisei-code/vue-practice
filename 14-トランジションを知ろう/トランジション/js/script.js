const app = Vue.createApp({
  data: () => ({
    show: true
  }),
})

app.component('hello-component', {
  template: '<p>Hello</p>'
})

app.mount('#app')