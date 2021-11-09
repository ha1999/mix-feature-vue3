<script>
import { inject } from 'vue'
export default {
  name: "OpenModalCreate",
  setup() {
      const emitter = inject("emitter")
      const emitModal = () => {
      emitter.emit('open-modal')
    }
    return {
        emitModal
    }
  },
}
</script>

<template>
  <button
    @click="emitModal"
    class="
      inline-flex
      items-center
      justify-center
      w-10
      h-10
      mr-2
      text-indigo-100
      transition-colors
      duration-150
      bg-indigo-700
      rounded-full
      focus:shadow-outline
      hover:bg-indigo-800
      float-right
    "
  >
    <svg
      class="h-8 w-8 text-white"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  </button>
</template>