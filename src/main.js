import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './routers/index';
import store from './stores/store';

// import Sidebar from './components/Layouts/Sidebar.vue'
// import Navbar from './components/Layouts/NavBar.vue'
import Loading from './components/LoadingScreens/Loading1.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
// app.component('Sidebar', Sidebar)
app.component('Loading', Loading)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
