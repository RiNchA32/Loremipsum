<template>
    <div data-aos="fade"
         class="ordering-scheme-step"
    >
        <div  class="ordering-scheme-step__dots">
            <div v-for="dot in 5"
                 :key="dot"
                 class="ordering-scheme-step__dot"
            >
            </div>
        </div>
        <div data-aos="zoom-in"
             class="ordering-scheme-step__frame"
        >
            <Icon
                :ico="ico"
                class="ordering-scheme-step__icon"
            />
        </div>
        <span class="ordering-scheme-step__text">
            {{ text }}
        </span>
    </div>
</template>

<script lang="ts">
    import {defineComponent, PropType} from 'vue';

    import {Icons} from '@/components/Icon/icons';

    import Icon from '@/components/Icon/Icon.vue';

    export default defineComponent({
        name: 'OrderingSchemeStep',
        components: {Icon},
        props: {
            /** ID иконки */
            ico: {
                type: [String, Number] as PropType<Icons>,
                default: -1,
            },
            text: {
                type: String,
                default: '',
            },
        },
    });
</script>

<style lang="scss">
    @import 'styles/ordering-scheme-step.scss';
</style>
