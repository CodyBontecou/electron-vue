<template>
  <div id="app">
    <sound />
    <notification />
    <ul id="timers-container"></ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Sound from './components/Sound.vue'
import { ipcRenderer } from '@/electron'
import Notification from './components/Notification.vue'

export default defineComponent({
  name: 'app',
  components: {
    Sound,
    Notification,
  },
  setup() {
    ipcRenderer.send('message', 'Hello from App.vue!')
  },
})
</script>
