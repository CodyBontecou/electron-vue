<template>
  <div class="h-screen w-screen" id="app">
    <div class="h-full w-full flex flex-col items-center justify-center">
      <sound />
      <notification />
      <ul id="timers-container"></ul>
    </div>
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
