<template>
    <div class="ordering">
        <div class="ordering__content">
            <OrderingTitle/>
            <OrderingScheme/>
            <UiSelect/>
            <Button
                color-white
                text="Прикрепить файл"
            >
                <Icon ico="7"/>
            </Button>
            <Button
                color-blue
                text="Отправить"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import OrderingTitle from '@/components/Ordering/Title/OrderingTitle.vue';
    import OrderingScheme from '@/components/Ordering/ Scheme/OrderingScheme.vue';
    import UiSelect from '@/components/Select/UiSelect.vue';
    import Button from '@/components/Button/Button.vue';
    import Icon from '@/components/Icon/Icon.vue';

    export default defineComponent({
        name: 'Ordering',
        components: {
            Icon,
            Button,
            UiSelect,
            OrderingScheme,
            OrderingTitle,
        },
    });
</script>

<style lang="scss">
    @import 'styles/ordering.scss';
</style>
