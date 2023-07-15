<template>
    <div class="ordering-slider">
        <span class="ordering-slider__title">Sed ut perspiciatis, unde omnis iste natus</span>
        <span class="ordering-slider__value">75 %</span>
        <label for="slider"
               class="ordering-slider__label"
        >
            <input id="slider"
                   type="range"
                   min="0"
                   max="100"
                   value="75"
                   class="ordering-slider__input"
            >
        </label>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'OrderingSlider',
    });
</script>

<style lang="scss">
    @import 'styles/ordering-slider.scss';
</style>
