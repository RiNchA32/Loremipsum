<template>
    <div class="select-option">
        <span class="select-option__text">
            {{ text }}
        </span>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'UiSelectOption',
        props: {
            text: {
                type: String,
                default: '',
            },
        },
    });
</script>

<style lang="scss">
@import 'styles/select-option.scss';
</style>
