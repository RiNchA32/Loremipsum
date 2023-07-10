<template>
    <li class="banner-list-item">
        <slot></slot>
    </li>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'banner-list-item',
    });
</script>
