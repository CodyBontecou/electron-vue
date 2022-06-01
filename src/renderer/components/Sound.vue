<script setup>
import { ref, computed } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { useSound } from '@vueuse/sound'
import buttonSfx from '../assets/error.wav'

const { play } = useSound(buttonSfx)

const interval = ref(4000)
const { pause, resume, isActive } = useIntervalFn(
  () => {
    play()
  },
  interval,
  { immediate: false }
)

const btnState = computed(() => {
  if (isActive.value) {
    return {
      text: 'Pause',
      onClick: pause,
    }
  }
  return {
    text: 'Resume',
    onClick: resume,
  }
})
</script>

<template>
  <p>
    Set interval:
    <input
      class="px-4 py-2 rounded"
      v-model="interval"
      type="number"
      placeholder="interval"
    />
  </p>
  <button class="p-2 border border-black rounded" @click="btnState.onClick">
    {{ btnState.text }}
  </button>
</template>
