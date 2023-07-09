<template>
    <div class="page">
        <PageHeader/>
        <slot>

        </slot>
        <PageFooter/>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import PageHeader from '@/components/Page/Header/PageHeader.vue';
    import PageFooter from '@/components/Page/Footer/PageFooter.vue';

    export default defineComponent({
        name: 'Page',
        components: {PageFooter, PageHeader},
    });
</script>

<style lang="scss">
@import 'styles/page.scss';
</style>
