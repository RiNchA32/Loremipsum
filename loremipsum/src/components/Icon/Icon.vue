<template>
    <component
        :is="svgImport"
        class="icon"
    />
</template>

<script lang="ts">
    import {defineComponent, PropType, computed} from 'vue';

    import {Icons} from '@/components/Icon/icons';

    import IconEnvelope from '@/components/Icon/templates/IconEnvelope.vue';
    import IconWebMoney from '@/components/Icon/templates/IconWebMoney.vue';
    import IconVk from '@/components/Icon/templates/IconVk.vue';
    import IconQiwiwallet from '@/components/Icon/templates/IconQiwiwallet.vue';
    import IconYandexMoney from '@/components/Icon/templates/IconYandexMoney.vue';

    export default defineComponent({
        name: 'Icon',
        props: {
            /** ID иконки */
            ico: {
                type: [String, Number] as PropType<Icons>,
                default: -1,
            },
        },
        setup(props) {
            const SVG_ICONS_MAP: Record<Icons, any> = {
                [Icons.Qiwiwallet]: IconQiwiwallet,
                [Icons.Envelope]: IconEnvelope,
                [Icons.Vk]: IconVk,
                [Icons.WebMoney]: IconWebMoney,
                [Icons.YandexMoney]: IconYandexMoney,

            };

            const svgImport = computed(() => SVG_ICONS_MAP[props.ico]);

            return {
                svgImport,
            };
        },
    });
</script>
<style lang="scss">
@import 'styles/icon.scss';
</style>
