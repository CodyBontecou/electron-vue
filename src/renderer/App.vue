<template>
  <div id="app">
    <hello />
    <sound />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Hello from './components/Hello.vue'
import Sound from './components/Sound.vue'
import { ipcRenderer } from '@/electron'

export default defineComponent({
  name: 'app',
  components: {
    Hello,
    Sound,
  },
  setup() {
    ipcRenderer.send('message', 'Hello from App.vue!')
  },
})
</script>
