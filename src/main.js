import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const ToDoApp = createApp(App)
ToDoApp.use(router)

const requireComponent = require.context('./components', true, /Base[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  var baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(baseComponentName, baseComponentConfig)
})

ToDoApp.mount('#app')
