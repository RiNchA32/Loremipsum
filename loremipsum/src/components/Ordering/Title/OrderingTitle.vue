<template>
    <div class="ordering-title">
        <span class="ordering-title__text">Оформление
            <span class="ordering-title__select">Заказа</span>
        </span>
        <span class="ordering-title__subtitle">
            Перед заполнением формы ознакомьтесь с нашей схемой работы!
        </span>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'OrderingTitle',
    });
</script>

<style lang="scss">
    @import 'styles/ordering-title.scss';
</style>
