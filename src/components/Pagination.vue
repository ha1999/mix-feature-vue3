<script>
import { ref, toRefs } from 'vue'
export default {
    props: {
        total: {
            type: Number,
            required: true
        },
        maxPage: {
            type: Number,
            default: 5
        }
    },
    setup(props) {
        const class_page = 'w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full'
        const class_disable = 'bg-gray-500 cursor-not-allowed'
        const class_able = 'bg-gray-200 cursor-pointer'
        const { total, maxPage } = toRefs(props)
        const current_page = ref(1)
        const setPage = (page) => {
            if (page > 0 && page < total.value + 1) current_page.value = page
        }
        return {
            current_page,
            setPage,
            total,
            class_page,
            class_disable,
            class_able
        }
    },
}
</script>

<template>
    <div class="flex flex-col items-center my-12">
        <div class="flex text-gray-700">
            <div
                :class="'h-12 w-12 mr-1 flex justify-center items-center rounded-full ' + (current_page === 1 ? class_disable : class_able)"
                @click="setPage(current_page - 1)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-left w-6 h-6"
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </div>
            <div class="flex h-12 font-medium rounded-full bg-gray-200">
                <div class="flex h-12 font-medium rounded-full bg-gray-200">
                    <div
                        v-for="index in 3"
                        :key="index"
                        :class="(index === current_page ? 'bg-green-700 text-white ' : '') + class_page"
                        @click="setPage(index)"
                    >{{ index }}</div>
                    <div
                        class="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
                    >...</div>
                </div>
            </div>
            <div
                :class="'h-12 w-12 ml-1 flex justify-center items-center rounded-full ' + (current_page === total ? class_disable : class_able)"
                @click="setPage(current_page + 1)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right w-6 h-6"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>
        </div>
    </div>
</template>