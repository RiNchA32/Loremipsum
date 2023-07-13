<template>
    <div class="ordering-scheme">
        <OrderingSchemeStep
            v-for="item in orderingSchemeSteps"
            :key="item"
            :text="item.text"
            :ico="item.icon"
            class="ordering-scheme__step"
        />
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    import {Icons} from '@/components/Icon/icons';

    import OrderingSchemeStep from '@/components/Ordering/ Scheme/Step/OrderingSchemeStep.vue';

    export default defineComponent({
        name: 'OrderingScheme',
        components: {OrderingSchemeStep},
        setup() {
            const orderingSchemeSteps = [
                {
                    text: 'Lorem ipsum dolor sit amet',
                    icon: Icons.IconSearch,

                },
                {
                    text: 'Сonsecteturadipiscing elit',
                    icon: Icons.IconPercent,

                },
                {
                    text: 'Sed do eiusmod tempor',
                    icon: Icons.IconFile,

                },
                {
                    text: 'Esse cillum dolore eu fugiat',
                    icon: Icons.Envelope,

                },
                {
                    text: 'Excepteur sint occaecat cupidatat non proident',
                    icon: Icons.IconPayment,

                },
            ];

            return {
                orderingSchemeSteps,
            }
        },
    });
</script>

<style lang="scss">
    @import 'styles/ordering-scheme.scss';
</style>
