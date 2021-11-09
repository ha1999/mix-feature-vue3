<script>
import { onMounted, reactive, watch, ref } from "vue"
import say from "../../utils/common/say"
import {getPageWord} from '@api/english'
export default {
  name: "TableWord",
  setup() {
    
    const mix_query = reactive({
        skip: 1,
        search: '',
        limit: 25,

    })
    const list_word = ref([])

    const sayEnglish = (message) =>  {
      say(message)
    }
    onMounted(() => {
        getPageWord({...mix_query}).then(data => list_word.value = data)
    })
    watch(mix_query, () => getPageWord({...mix_query}) )
    return {
      sayEnglish,
    }
  },
}
</script>

<template>
  <section class="w-full container mx-auto p-2 lg:p-5 xl:p-6 font-mono">
    <div class="w-full mb-8 overflow-x-auto rounded-lg shadow-lg">
      <div class="w-full">
        <table class="w-full">
          <thead>
            <tr
              class="
                text-xs
                lg:text-lg
                xl:text-xl
                font-semibold
                tracking-wide
                text-left text-gray-900
                bg-gray-100
                uppercase
                border-b border-gray-600
              "
            >
              <th class="px-4 py-3">Word</th>
              <th @click="sayEnglish('hi.')" class="px-4 py-3">Mean</th>
              <th class="px-4 py-3">Description</th>
              <th class="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                    <svg
                      class="h-8 w-8 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                    </svg>

                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-black">Sufyan</p>
                    <p class="text-xs text-gray-600">Developer</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-ms font-semibold border">22</td>
              <td class="px-4 py-3 text-xs border">
                <span
                  class="
                    px-2
                    py-1
                    font-semibold
                    leading-tight
                    text-green-700
                    bg-green-100
                    rounded-sm
                  "
                  >Acceptable</span
                >
              </td>
              <td class="px-4 py-3 text-sm border">
                <div class="flex justify-center">
                    <svg
                  class="h-8 w-8 text-green-500 cursor-pointer"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                  />
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                  <line x1="16" y1="5" x2="19" y2="8" />
                </svg>
                <svg
                  class="h-8 w-8 text-red-500 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>