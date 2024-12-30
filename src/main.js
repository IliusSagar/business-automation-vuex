import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';

// Create the app instance
const app = createApp(App);

// Use the Vuex store
app.use(store);

app.use(router);

// Mount the app
app.mount('#app');
