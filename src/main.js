import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BaiduMap from 'vue-baidu-map'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BaiduMap, {
  ak: 'http://api.map.baidu.com/api?v=2.0&ak=3XGoQjHCMWLzFLM1FV4iRZZ8O2ZqL7Pd'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')