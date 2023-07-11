<template>
    <div class="ordering">
        <div class="ordering__content">
            <OrderingTitle/>
            <OrderingScheme/>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import OrderingTitle from '@/components/Ordering/Title/OrderingTitle.vue';
    import OrderingScheme from '@/components/Ordering/ Scheme/OrderingScheme.vue';

    export default defineComponent({
        name: 'Ordering',
        components: {OrderingScheme, OrderingTitle},
    });
</script>

<style lang="scss">
    @import 'styles/ordering.scss';
</style>
