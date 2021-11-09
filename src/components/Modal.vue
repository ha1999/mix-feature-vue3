<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
            <div
                class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
            >
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay
                        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    />
                </TransitionChild>

                <span
                    class="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >&#8203</span>
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div
                        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle min-w-350 sm:max-w-lg sm:w-full"
                    >
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class>
                                <div
                                    class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
                                >
                                    <PlusCircleIcon
                                        class="h-6 w-6 text-green-600"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <DialogTitle
                                        as="h3"
                                        class="text-lg leading-6 font-medium text-gray-900"
                                    >Add new word</DialogTitle>
                                    <div class="mt-2">
                                        <div class="mb-5 pt-0">
                                            <input
                                                v-model="word"
                                                type="text"
                                                placeholder="New word ..."
                                                class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-green-100 rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full border-green-400"
                                            />
                                            <p class="text-red-800">{{wordError}}</p>
                                        </div>
                                        <div class="mb-5 pt-0">
                                            <input
                                                v-model="mean"
                                                type="text"
                                                placeholder="Mean of word ..."
                                                class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-green-100 rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full border-green-400"
                                            />
                                            <p class="text-red-800">{{meanError}}</p>
                                        </div>
                                        <div class="mb-3 pt-0">
                                            <input
                                                v-model="description"
                                                type="text"
                                                placeholder="Description ..."
                                                class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-green-100 rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full border-green-400"
                                            />
                                            {{descriptionError}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex">
                            <button
                                type="button"
                                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                @click="submitForm"
                            >Add word</button>
                            <button
                                type="button"
                                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                @click="open = false"
                                ref="cancelButtonRef"
                            >Cancel</button>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { ref, inject, onMounted, watch } from "vue"
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue"
import { PlusCircleIcon } from "@heroicons/vue/outline"
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
export default {
    name: "Modal",
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        PlusCircleIcon,
    },
    setup() {
        const open = ref(false)
        const emitter = inject("emitter")
        const schema = yup.object({
            word: yup.string().required().min(2).max(100),
            mean: yup.string().required().min(2).max(100),
            description: yup.string().max(1000)
        })

        const { handleSubmit } = useForm({
            validationSchema: schema,
        })

        const submitForm = handleSubmit(data => {
            alert(JSON.stringify(data))
        })

        const { value: word, errorMessage: wordError } = useField('word')
        const { value: mean, errorMessage: meanError } = useField('mean')
        const { value: description, errorMessage: descriptionError } = useField('description')

        onMounted(() => {
            emitter.on("open-modal", () => {
                open.value = true
            })
            emitter.on("close-modal", () => {
                open.value = false
            })
        })
        watch(open, () => {
            if (open.value === false) {
                alert("Are you sure cancel")
                open.value = true
            }
        })
        return {
            open,
            word,
            mean,
            description,
            wordError,
            meanError,
            descriptionError,
            submitForm
        }
    },
}
</script>