<template>
    <form class="ordering-form">
        <UiSelect/>
        <Field id="email"
               type="text"
               placeholder="Ваш e-mail"
        />
        <Field id="name"
               type="text"
               placeholder="Ваше имя"
        />
        <OrderingSlider class="ordering-form__slider"/>
        <OrderingButtonAddFile class="ordering-form__add-file"/>
        <Button
            color-blue
            text="Отправить"
            class="ordering-form__submit"
        />
    </form>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import UiSelect from '@/components/Select/UiSelect.vue';
    import OrderingButtonAddFile
        from '@/components/Ordering/ButtonAddFile/OrderingButtonAddFile.vue';
    import Button from '@/components/Button/Button.vue';
    import Field from '@/components/Field/Field.vue';
    import OrderingSlider from '@/components/Ordering/Slider/OrderingSlider.vue';

    export default defineComponent({
        name: 'OrderingForm',
        components: {
            OrderingSlider,
            Field,
            Button,
            OrderingButtonAddFile,
            UiSelect,
        },
    });
</script>

<style lang="scss">
@import 'styles/ordering-form.scss';
</style>
