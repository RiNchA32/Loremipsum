<template>
    <div class="ordering-slider">
        <span class="ordering-slider__title">Sed ut perspiciatis, unde omnis iste natus</span>
        <span class="ordering-slider__value">{{ sliderValue }}%</span>
        <label for="slider"
               class="ordering-slider__label"
        >
            <input id="slider"
                   v-model="sliderValue"
                   type="range"
                   min="0"
                   max="100"
                   class="ordering-slider__input"
            >
        </label>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue';

    export default defineComponent({
        name: 'OrderingSlider',
        setup() {
            const sliderValue = ref('75');

            return {
                sliderValue,
            }
        },
    });
</script>

<style lang="scss">
    @import 'styles/ordering-slider.scss';
</style>
