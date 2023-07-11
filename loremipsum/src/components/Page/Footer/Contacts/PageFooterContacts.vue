<template>
    <div class="page-footer-contacts">
        <PageFooterList>
            <PageFooterListItem
                v-for="item in contactsList"
                :key="item"
            >
                <PageFooterButton :text="item.text"
                                  :ico="item.icon"
                                  :href="item.href"
                                  tag="a"
                                  target="_blank"/>
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
            const contactsList = [
                {
                    text: 'info@ipsum228.com',
                    icon: Icons.Envelope,
                    href: 'mailto:info@ipsum228.com',
                },
                {
                    text: 'Мы вконтакте',
                    icon: Icons.Vk,
                    href: 'http://vk.com',
                },
            ]

            return {
                contactsList,
            }
        },
    });
</script>

<style lang="scss">
@import 'styles/page-footer-contacts.scss';
</style>
