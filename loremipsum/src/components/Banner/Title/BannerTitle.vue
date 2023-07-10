<template>
    <div class="banner-title">
        <span class="banner-title__text">
            <span class="banner-title__select">Lorem ipsum</span>
            dolor sit
            <br>
            amet consectetur
            <span class="banner-title__select">adipiscing</span>
        </span>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'BannerTitle',
    });
</script>

<style lang="scss">
@import 'styles/banner-title.scss';
</style>
