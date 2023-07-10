<template>
    <router-link
        :to="to"
        v-slot="{href, isActive}"
        custom
    >
        <component
            :is="tag"
            :href="href"
            :class="isActive && 'page-header-navigation-button--is-active'"
            class="page-header-navigation-button"
        >
            <span class="page-header-navigation-button__text">{{ text }}</span>
        </component>
    </router-link>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'PageHeaderNavigationButton',
        props: {
            /** Ссылка роутерлинка */
            to: {
                type: [String, Object],
                default: '',
            },
            /** Текст кнопки */
            text: {
                type: String,
                default: '',
            },
            /** HTML тег роутера */
            tag: {
                type: String,
                default: 'a',
            },
        },
    });

</script>

<style lang="scss">
@import 'styles/page-header-navigation-button.scss';
</style>
