<template>
    <ul class="page-footer-list">
        <slot></slot>
    </ul>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'PageFooterList',
    });
</script>

<style lang="scss">
@import 'styles/page-footer-list.scss';
</style>
