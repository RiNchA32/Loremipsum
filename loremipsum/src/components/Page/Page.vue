<template>
    <div class="page">
        <PageHeader/>
        <Banner/>
        <PageFooter/>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import PageHeader from '@/components/Page/Header/PageHeader.vue';
    import PageFooter from '@/components/Page/Footer/PageFooter.vue';
    import Banner from '@/components/Banner/Banner.vue';

    export default defineComponent({
        name: 'Page',
        components: {Banner, PageFooter, PageHeader},
    });
</script>

<style lang="scss">
@import 'styles/page.scss';
</style>
