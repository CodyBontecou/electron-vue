<template>
  <div class="w-1/2 mx-auto" id="hello">
    <h1>{{ message }}</h1>
    <form action="">
      <!-- v-on:click="submit" -->
      <div class="relative">
        <label class="relative text-gray-400 focus-within:text-gray-600 block">
          <input
            :value="keybind"
            @keydown="setKeybind"
            placeholder="Keybind"
            type="text"
            class="
              form-input
              border border-gray-900
              py-3
              px-4
              bg-white
              placeholder-gray-400
              text-gray-500
              appearance-none
              w-full
              block
              focus:outline-none
            "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              pointer-events-none
              w-8
              h-8
              absolute
              top-1/2
              transform
              -translate-y-1/2
              right-3
              z-10
              hover:bg-red-200
            "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useMainStore } from '@/stores/main'
import { ipcRenderer } from '@/electron'

// TODO: Blogpost on separation of concerns. Extracting non-VueJS specific logic from component
const modifierKeys = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey']

export default defineComponent({
  data() {
    return {
      keybind: '',
    }
  },
  setup() {
    const main = useMainStore()

    return {
      message: computed(() => main.message),
    }
  },
  methods: {
    // TODO: Blogpost on creating a keybind input
    setKeybind(event) {
      let parsedKey = ''

      modifierKeys.forEach(key => {
        if (event[key]) {
          parsedKey += key
        }
      })
      parsedKey += event.code
      parsedKey = parsedKey
        .replaceAll('Arrow', '')
        .replaceAll('Key', ' ')
        .replaceAll('  ', '+')
        .replaceAll(' ', '+')

      this.keybind = parsedKey
    },
    submit() {
      ipcRenderer.send('setKeybind', this.keybind)
    },
  },
})
</script>

<style scoped>
#hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
