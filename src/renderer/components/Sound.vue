<script setup>
import { useSound } from '@vueuse/sound'
import buttonSfx from '../assets/error.wav'

const { play } = useSound(buttonSfx)
</script>

<template>
  <button @click="play">Play a sound</button>
</template>
