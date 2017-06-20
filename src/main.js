// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import  { LoadingPlugin, AlertPlugin } from 'vux'
import axios from 'axios'

Vue.use(LoadingPlugin)
Vue.use(VueRouter)
Vue.use(AlertPlugin)

import { Alert, Cell, TransferDomDirective as TransferDom, Actionsheet, Group, XSwitch, Toast, Loading } from 'vux'
Vue.component('alert', Alert)
Vue.component("cell", Cell)
Vue.component('transferDom', TransferDom)
Vue.component('actionsheet', Actionsheet)
Vue.component('group', Group)
Vue.component('x-switch', XSwitch)
Vue.component('toast', Toast)
Vue.component('loading', Loading)
const routes = [{
  path: '/',
  component: Home
}, {
	path:'/page/actionsheet',
	component: require('./page/actionsheet.vue'),
	meta: {
		pagetTitle: 'x-switch'
	}
}, {
	path:'/page/alert',
	component: require('./page/alert.vue'),
	meta: {
		pagetTitle: 'alert'
	}
}, {
	path:'/page/badge',
	component: require('./page/Badge.vue'),
	meta: {
		pagetTitle: 'badge'
	}
}, {
	path:'/page/blur',
	component: require('./page/Blur.vue'),
	meta: {
		pagetTitle: 'blur'
	}
}, {
	path:'/page/buttonTab',
	component: require('./page/ButtonTab.vue'),
	meta: {
		pagetTitle: 'buttonTab'
	}
}, {
	path:'/page/calender',
	component: require('./page/Calender.vue'),
	meta: {
		pagetTitle: 'calebder'
	}
}, {
	path:'/page/card',
	component: require('./page/Card.vue'),
	meta: {
		pagetTitle: 'card'
	}
}, {
	path:'/page/cellBox',
	component: require('./page/CellBox.vue'),
	meta: {
		pagetTitle: 'cellBox'
	}
}, {
	path:'/page/cellFormPreview',
	component: require('./page/CellFormPreview.vue'),
	meta: {
		pagetTitle: 'cellBox'
	}
}, {
	path:'/page/cell',
	component: require('./page/Cell.vue'),
	meta: {
		pagetTitle: 'cell'
	}
}, {
	path:'/page/checkIcon',
	component: require('./page/CheckIcon.vue'),
	meta: {
		pagetTitle: 'checkIcon'
	}
}, {
	path:'/page/checker',
	component: require('./page/Checker.vue'),
	meta: {
		pagetTitle: 'checker'
	}
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
