import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createAuth0} from "@auth0/auth0-vue";
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import "primevue/resources/themes/lara-light-indigo/theme.css";

import './assets/sass/styles.scss'
import 'nprogress/nprogress.css'
import progressBar from "@/includes/progress-bar";

progressBar(router);

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue);
app.use(router)
    .use(
        createAuth0({
            domain: import.meta.env.VITE_AUTH0_DOMAIN,
            clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
            authorizationParams: {
                redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
            },
        })
    );

app.mount('#app');
