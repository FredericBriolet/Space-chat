<template>
  <div class="message-list">
    <ul>
        <message-component v-for="message in state.messages" :message="message"></message-component>
    </ul>
  </div>
</template>

<script>
import store from 'store'

import Message from './Message.vue'

export default {
  data () {
    return {
      state: store
    }
  },
  components: {
    'message-component': Message
  }
}
</script>