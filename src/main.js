import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

// import Vue from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'

const ToDoApp = createApp(App)
ToDoApp.use(router)
// ToDoApp.use(BootstrapVue)

const requireComponent = require.context('./components', true, /Base[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  var baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  ToDoApp.component(baseComponentName, baseComponentConfig)
})

ToDoApp.mount('#app')
