<template>
    <div class="page-footer-money-cards">
        <PageFooterList>
            <PageFooterListItem
                v-for="item in MoneyCardsList"
                :key="item"
            >
                <PageFooterButton :text="item.text"
                                  :ico="item.icon"/>
            </PageFooterListItem>
        </PageFooterList>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import PageFooterList from '@/components/Page/Footer/List/PageFooterList.vue';
    import PageFooterListItem from '@/components/Page/Footer/List/Item/PageFooterListItem.vue';
    import PageFooterButton from '@/components/Page/Footer/Button/PageFooterButton.vue';
    import {Icons} from '@/components/Icon/icons';

    export default defineComponent({
        name: 'PageFooterMoneyCards',
        components: {PageFooterButton, PageFooterListItem, PageFooterList},
        setup() {
            const MoneyCardsList = [
                {
                    text: 'Qiwi wallet',
                    icon: Icons.Qiwiwallet,

                },
                {
                    text: 'Yandex Money',
                    icon: Icons.YandexMoney,

                },
                {
                    text: 'Web Money',
                    icon: Icons.WebMoney,

                },

            ];

            return {
                MoneyCardsList,
            }
        },
    });
</script>

<style lang="scss">
@import 'styles/page-footer-money-cards.scss';
</style>
