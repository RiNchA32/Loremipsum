<template>
    <div class="page-header-navigation-button">
        <span class="page-header-navigation-button__text">
            {{ text }}
        </span>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'PageHeaderNavigationButton',
        props: {
            text: {
                type: String,
                default: '',
            },
        },
    });
</script>

<style lang="scss">
@import 'styles/page-header-navigation-button.scss';
</style>
