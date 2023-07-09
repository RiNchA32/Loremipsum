<template>
    <div class="page-footer-contacts">
        <PageFooterList>
            <PageFooterListItem
                v-for="item in ContactsList"
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
        name: 'PageFooterContacts',
        components: {PageFooterButton, PageFooterListItem, PageFooterList},
        setup() {
            const ContactsList = [
                {
                    text: 'info@ipsum228.com',
                    icon: Icons.Envelope,

                },
                {
                    text: 'Мы вконтакте',
                    icon: Icons.Vk,

                },
            ]

            return {
                ContactsList,
            }
        },
    });
</script>

<style lang="scss">
@import 'styles/page-footer-contacts.scss';
</style>
