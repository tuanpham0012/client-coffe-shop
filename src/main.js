import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './routers/index';
import store from './stores/store';

// import Sidebar from './components/Layouts/Sidebar.vue'
// import Navbar from './components/Layouts/NavBar.vue'

const app = createApp(App)
// app.component('Sidebar', Sidebar)
// app.component('Navbar', Navbar)
app.use(router)
app.use(store)
app.mount('#app')
