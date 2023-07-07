<template>
    <div class="page-footer">
        <div class="page-footer__content">
            <PageFooterNavigation/>

        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'PageFooter',
    });
</script>

<style lang="scss">
@import 'styles/page-footer.scss';
</style>
