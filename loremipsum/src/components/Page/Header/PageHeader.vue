<template>
    <div class="page-header">
        <div class="page-header__content">
            <Logo class="page-header__logo"/>
            <PageHeaderNavigation/>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Logo from '@/components/Logo/Logo.vue';
    import PageHeaderNavigation from '@/components/Page/Header/Navigation/PageHeaderNavigation.vue';

    export default defineComponent({
        name: 'PageHeader',
        components: {PageHeaderNavigation, Logo},
    });
</script>

<style lang="scss">
@import 'styles/page-header.scss';

</style>
