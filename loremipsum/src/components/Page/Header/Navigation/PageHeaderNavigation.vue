<template>
    <nav class="page-header-navigation">
        <ul class="page-header-navigation__list">
            <li v-for="item in navigationList"
                class="page-header-navigation__list-item">
                <PageHeaderNavigationButton :text="item"/>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import PageHeaderNavigationButton
        from '@/components/Page/Header/Navigation/Button/PageHeaderNavigationButton.vue';

    export default defineComponent({
        name: 'PageHeaderNavigation',
        components: {PageHeaderNavigationButton},
        setup() {
            const navigationList = ['Бизнес', 'О нас', 'цены', 'Оформить заказ'];

            return {
                navigationList,
            }
        },
    });
</script>

<style lang="scss">
@import 'styles/page-header-navigation.scss';
</style>
