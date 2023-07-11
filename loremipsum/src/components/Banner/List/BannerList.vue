<template>
    <ul class="banner-list">
        <div class="banner-list__title">
            {{ title }}
        </div>
        <li v-for="item in list"
            :key="item"
            class="banner-list__item"
        >
            <span class="banner-list__text">
                {{ item }}
            </span>
        </li>
    </ul>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'BannerList',
        props: {
            title: {
                type: String,
                default: '',
            },
            list: {
                type: Array,
                default: () => ([]),
            },
        },
    });
</script>

<style lang="scss">
@import 'styles/banner-list.scss';
</style>
