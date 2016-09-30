import store from 'store'

export default {
	methods: {
		go(url) {
			window.history.pushState(null, null, url)
			store.currentRoute = url;
		}
	}
}