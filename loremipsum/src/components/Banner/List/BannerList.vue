<template>
    <ul class="banner-list">
        <slot></slot>
    </ul>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'BannerList',
    });
</script>

<style lang="scss">
@import 'styles/banner-list.scss';
</style>
