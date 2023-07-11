<template>
    <button :class="buttonModifiers"
            class="button"
    >
        <span class="button__text">
            {{text}}
        </span>
    </button>
</template>

<script lang="ts">
    import {defineComponent, computed} from 'vue';

    export default defineComponent({
        name: 'Button',
        props: {
            text: {
                type: String,
                default: '',
            },
            colorBlue: {
                type: Boolean,
                default: false,
            },
            colorWhite: {
                type: Boolean,
                default: false,
            },
        },
        setup(props) {
            const buttonModifiers = computed<(false | string)[]>(() => ([
                props.colorBlue && 'button--color-blue',
                props.colorWhite && 'button--color-white',
            ]));

            return {
                buttonModifiers,
            };
        },
    });
</script>

<style lang="scss">
@import 'styles/button.scss';
</style>
