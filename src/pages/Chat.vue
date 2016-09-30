<template>
  <div class="app">
    <header-component></header-component>

    <div class="wrapper">
      <user-list-component></user-list-component>
      <div class="wrapper__messages">
        <message-list-component></message-list-component>
        <input-component></input-component>
      </div>
    </div>
  </div>
</template>

<script>
import store from 'store'
import Header from '../components/Header.vue'
import UserList from '../components/UserList.vue'
import MessageList from '../components/MessageList.vue'
import Input from '../components/Input.vue'
import MixinGo from '../mixins/go'

export default {
  data () {
    return {
      msg: 'Hello Harold!'
    }
  },
  components: {
    'header-component': Header,
    'user-list-component': UserList,
    'message-list-component': MessageList,
    'input-component': Input
  },
  beforeMount() {
    if(store.user.name === '') {
      this.go('/')
    }
  },
  mixins: [MixinGo]
}
</script>
