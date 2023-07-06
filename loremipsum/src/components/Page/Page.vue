<template>
    <div class="page">
        <PageHeader/>
        <slot>

        </slot>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import PageHeader from '@/components/Page/Header/PageHeader.vue';

    export default defineComponent({
        name: 'Page',
        components: {PageHeader},
    });
</script>

<style lang="scss">
@import 'styles/page.scss';
</style>
