<template>
    <div class="banner">
        <div class="banner__content">
            <BannerTitle/>
            <BannerList title="At vero eos et accusamus et iusto odio dignissimos ducimus!"
                        :list="bannerList"/>
            <div class="banner__buttons">
                <Button color-blue
                        text="Заказать"/>
                <Button color-white
                        text="Подробнее"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import BannerTitle from '@/components/Banner/Title/BannerTitle.vue';
    import BannerList from '@/components/Banner/List/BannerList.vue';
    import Button from '@/components/Button/Button.vue';

    export default defineComponent({
        name: 'Banner',
        components: {Button, BannerList, BannerTitle},
        setup() {
            const bannerList = [
                '- Totam rem aperiam eaque ipsa',
                '- Sit voluptatem accusantium doloremque laudantium',
                '- Sed ut perspiciatis, unde omnis iste natus error',
            ]

            return {
                bannerList,
            }
        },
    });
</script>

<style lang="scss">
@import 'styles/banner.scss';
</style>
