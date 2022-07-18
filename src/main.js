import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


createApp(App).mixin(mixins).use(store).use(router).use(VueSweetalert2).mount('#app');

window.Kakao.init('b1bb907b524511e2b460861ff01fe8ac');