import {onMounted} from 'vue'
export default function useTitle(title){
    onMounted(() => document.title = title)
}