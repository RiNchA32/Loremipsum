<template>
    <div class="page-footer">
        <div class="page-footer__content">
            <div class="page-footer__section">
                <span class="page-footer__cooperate">
                    © 2018 «LoremIpsum.net» Все права защищены.
                </span>
            </div>
            <div class="page-footer__section">
                <PageFooterMoneyCards/>
            </div>
            <div class="page-footer__section">
                <PageFooterContacts/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import PageFooterMoneyCards from '@/components/Page/Footer/MoneyCards/PageFooterMoneyCards.vue';
    import PageFooterContacts from '@/components/Page/Footer/Contacts/PageFooterContacts.vue';

    export default defineComponent({
        name: 'PageFooter',
        components: {PageFooterContacts, PageFooterMoneyCards},
    });
</script>

<style lang="scss">
@import 'styles/page-footer.scss';
</style>
