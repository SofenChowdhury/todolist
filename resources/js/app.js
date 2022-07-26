require('./bootstrap');

import { createApp } from 'vue'
import App from './vue/app'

export const eventBus = createApp(App).mount('#app')
