<template>
  <div id="app">
    <hello />
    <sound />
    <person />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Hello from './components/Hello.vue'
import Sound from './components/Sound.vue'
import Person from './components/Person.vue'
import { ipcRenderer } from '@/electron'

export default defineComponent({
  name: 'app',
  components: {
    Hello,
    Sound,
    Person,
  },
  setup() {
    ipcRenderer.send('message', 'Hello from App.vue!')
  },
})
</script>
