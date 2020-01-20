import Vue from 'vue'
import App from './App.vue'
import  {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
//bootstrap stuff
import BootstrapVue  from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
