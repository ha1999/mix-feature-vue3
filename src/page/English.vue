<script>
import Layout from "./Layout.vue"
import useTitle from "../useHook/useTitle"
import TableWord from '../components/English/TableWord.vue'
import Breadcrumb from '../components/Breadcrumb.vue' 
import OpenModalCreate from '../components/English/OpenModalCreate.vue'
export default {
    components: { Layout, TableWord, Breadcrumb, OpenModalCreate},
    name: "English",
    setup() {
        useTitle('English')
    },

};
</script>

<template>
    <Layout>
        <Breadcrumb />
        <OpenModalCreate />
        <TableWord />
    </Layout>
</template>