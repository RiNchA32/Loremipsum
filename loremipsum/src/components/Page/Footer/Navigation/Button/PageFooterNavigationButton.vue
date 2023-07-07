<template>
    <div class="page-footer-navigation-button">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'PageFooterNavigationButton',
    });
</script>

<style lang="scss">
@import 'styles/page-footer-navigation-button.scss';
</style>
