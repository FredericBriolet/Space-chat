<template>
  <div class="sidebar">
    <h2>Players</h2>
    <div class="number">
      <p>{{ userCount }}</p>
    </div>
    <ul>
      <user-component v-for="user in state.users" :user="user"></user-component>
    </ul>
  </div>
</template>

<script>
import store from 'store'
import User from './User.vue'

export default {
  data () {
    return {
      state: store
    }
  },
  computed: {
    userCount() {
      return this.state.users.length
    }
  },
  components: {
    'user-component': User
  }
}
</script>