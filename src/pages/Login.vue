<template>
	<article class="overlay">
		<div class="overlay-wrapper">
	    	<h1>Space-chat</h1>
	    	<h2>Username :</h2>

			<form @submit="onPseudoSubmit">
		    	<div class="text-bar">
		    		<input type="text" name="pseudo" v-model="pseudo" placeholder="Pseudo ..." />
		    	</div>

		    	<p>Bonus! Add your avatar url if you want :</p>
		    	<div class="text-bar">
		    		<input type="text" name="avatar" v-model="avatar" placeholder="http://www.reactiongifs.com/r/chloe.gif" />
		    	</div>

		    	<div class="button-wrapper">
		    		<input type="submit" value="GO !" />
		    	</div>
	    	</form>
	    </div>
    </article>
</template>

<script>
import store from 'store'
import socketManager from '../lib/socketManager.js'
import MixinGo from '../mixins/go'

export default {
	data() {
		return {
			pseudo: '',
			avatar: 'http://www.reactiongifs.com/r/chloe.gif'
		}
	},
	methods: {
		onPseudoSubmit(e) {
			e.preventDefault()
			e.stopPropagation()
			if(this.pseudo != ''){
				store.user.name = this.pseudo
				socketManager.login(this.pseudo, this.avatar, (user) => {
					this.go('/chat')
				})
			}
		}
	},
	mixins: [MixinGo]
}
</script>