<template>
    <nav class="page-header-navigation">
        <ul class="page-header-navigation__list">
            <li
                v-for="item in navigationList"
                :key="item"
                class="page-header-navigation__list-item"
            >
                <PageHeaderNavigationButton :text="item.text"
                                            :to="item.to"/>
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
            const navigationList = [
                {
                    text: 'Бизнес',
                    to: '/',
                },
                {
                    text: 'О нас',
                    to: '/about',
                },
                {
                    text: 'цены',
                    to: '/prices',
                },
                {
                    text: 'Оформить заказ',
                    to: '/checkout',
                },

            ];

            return {
                navigationList,
            }
        },
    });
</script>

<style lang="scss">
@import 'styles/page-header-navigation.scss';
</style>
