<script setup lang="ts">
import { useWebNotification } from '@vueuse/core'
import type { UseWebNotificationOptions } from '@vueuse/core'
import { onKeyStroke } from '@vueuse/core'

onKeyStroke(['s'], e => {
  e.preventDefault()
  console.log('s pressed')
})

const options: UseWebNotificationOptions = {
  title: 'Hello, world from Vocate!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
}
const { isSupported, show } = useWebNotification(options)
</script>

<template>
  <div>
    <p>Supported: {{ isSupported }}</p>
  </div>

  <div v-if="isSupported">
    <button @click="show()">Show Notification</button>
  </div>
  <div v-else>The Notification Web API is not supported in your browser.</div>
</template>
