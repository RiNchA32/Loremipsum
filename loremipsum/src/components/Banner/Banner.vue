<template>
    <div class="banner">
        <div class="banner__content">
            <BannerTitle/>
            <BannerList>
                <BannerListItem>
                    1234
                </BannerListItem>
            </BannerList>
            <div class="banner__buttons">
                <button>
                </button>
                <button>
                </button>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import BannerTitle from '@/components/Banner/Title/BannerTitle.vue';
    import BannerList from '@/components/Banner/List/BannerList.vue';
    import BannerListItem from '@/components/Banner/List/Item/banner-list-item.vue';

    export default defineComponent({
        name: 'Banner',
        components: {BannerListItem, BannerList, BannerTitle},

    });
</script>

<style lang="scss">
@import 'styles/banner.scss';
</style>
