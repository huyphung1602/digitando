import { createApp } from 'vue';
import App from './components/App.vue';

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
      const app = createApp(App);
      app.mount('#app');
  })
}
