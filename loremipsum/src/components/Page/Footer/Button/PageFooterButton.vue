<template>
    <component
        :is="tag"
        class="page-footer-button"
    >
        <Icon :ico="ico"
              class="page-footer-button__icon"/>
        <span class="page-footer-button__text">
            {{ text }}
        </span>
    </component>
</template>

<script lang="ts">
    import {defineComponent, PropType} from 'vue';
    import {Icons} from '@/components/Icon/icons';
    import Icon from '@/components/Icon/Icon.vue';

    export default defineComponent({
        name: 'PageFooterButton',
        components: {Icon},
        props: {
            text: {
                type: String,
                default: '',
            },
            /** ID иконки */
            ico: {
                type: [String, Number] as PropType<Icons>,
                default: -1,
            },
            tag: {
                type: String,
                default: 'div',
            },
        },
    });
</script>

<style lang="scss">
@import 'styles/page-footer-button.scss';
</style>
