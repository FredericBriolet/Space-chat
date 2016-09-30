<template>
    <div class="message-bar">
		<form @submit="onFormSubmit">
	    	<div class="text-bar">
	    		<input type="text" name="message" v-model="message" placeholder="Tapez votre message ..." />
	    	</div>
	    	<div class="button-wrapper">
	    		<input type="submit" value="SEND" />
	    	</div>
    	</form>
    </div>
</template>

<script>
import store from 'store'
import socketManager from '.././lib/socketManager.js'

export default {
	data() {
		return {
			message: ''
		}
	},
	methods: {
		onFormSubmit(e) {
			e.preventDefault()
			e.stopPropagation()
			if(this.message != ''){
				var messageObject = {
					username: store.user.name,
					text: this.message,
					time: new Date().toGMTString()
				}
				socketManager.onNewMessage(messageObject);
				socketManager.socket.emit('new message', this.message)
				this.message = ''
			}
		}
	}
}
</script>