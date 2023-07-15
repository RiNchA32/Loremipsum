<template>
    <div class="field">
        <div class="field__content">
            <label :for="id"
                   class="field__label"
            >
                <input
                    :id="id"
                    :type="type"
                    :placeholder="placeholder"
                    class="field__input"
                >
            </label>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'Field',
        props: {
            type: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                default: '',
            },
            id: {
                type: String,
                default: '',
            },
        },
    });
</script>

<style lang="scss">
@import 'styles/field.scss';
</style>
