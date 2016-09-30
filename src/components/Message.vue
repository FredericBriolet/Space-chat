<template>
	<li>
		<div class="message-wrapper" v-bind:class="{ 'user-message': message.username == state.user.name }">
			<p class="name">{{ message.username }} :</p>
			<p class="date">{{ message.time }}</p>
			<div class="content">
				<p>{{ message.text }}</p>
			</div>
		</div>
	</li>
</template>

<script>
import store from 'store'

export default {
	props: ['message'],
	data () {
    	return {
      		state: store
    	}
  	}
}

</script>