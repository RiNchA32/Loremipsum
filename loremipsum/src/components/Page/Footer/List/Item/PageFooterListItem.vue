<template>
    <li class="page-footer-list-item">
        <slot></slot>
    </li>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'PageFooterListItem',
    });
</script>
