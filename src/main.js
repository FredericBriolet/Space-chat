import Vue from 'vue'

import socketManager from './lib/socketManager.js'

socketManager.connect('http://ddi2019-chat.herokuapp.com/');

import Login from './pages/Login.vue'
import Chat from './pages/Chat.vue'

import store from 'store'

const routes = {
	'/': Login,
	'/chat': Chat
}

var viewModel = routes[window.location.pathname]

store.currentRoute = window.location.pathname
document.addEventListener('popstate', (e) => {
	store.currentRoute = window.location.pathname
})


new Vue({
  el: '#app',
  data() {
  	return {
  		state: store
  	}
  },
  computed: {
  	viewModel() {
  		return routes[this.state.currentRoute]
  	}
  },
  render(h) {
  	return h(this.viewModel)
  }
})
