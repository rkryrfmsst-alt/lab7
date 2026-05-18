import './assets/global.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerServices } from './plugins/api'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light'
    }
});

const app = createApp(App);
registerServices(app);
app.use(vuetify);
app.use(router);
app.mount('#app')