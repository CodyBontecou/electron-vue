<script setup>
import { ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { useSound } from '@vueuse/sound'
import buttonSfx from '../assets/error.wav'

const { play } = useSound(buttonSfx)

const interval = ref(4000)
const { pause, resume, isActive } = useIntervalFn(() => {
  play()
}, interval)
</script>

<template>
  <p>
    interval:
    <input v-model="interval" type="number" placeholder="interval" />
  </p>
  <button v-if="isActive" class="orange" @click="pause">Pause</button>
  <button v-if="!isActive" @click="resume">Resume</button>
</template>
