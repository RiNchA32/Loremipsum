<template>
    <div class="app">
        <Page />
        <div class="page-header">

        </div>
        <div class="banner">

        </div>
        <div class="page-footer">

        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import Page from '@/components/Page/Page.vue';

    export default defineComponent({
        name: 'App',
        components: {Page},
    });
</script>

<style lang="scss">
    @import 'styles/app.scss';
</style>
