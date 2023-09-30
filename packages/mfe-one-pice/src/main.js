import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'


const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        name: this.name
      })
    }
  },
  handleInstance: (app) => {
  }
})

export const mount = (props) =>
  vueLifecycles.mount(props).then(() => {
  })

export const bootstrap = (props) =>
  vueLifecycles.bootstrap(props).then(() => {
  })

export const unmount = vueLifecycles.unmount
