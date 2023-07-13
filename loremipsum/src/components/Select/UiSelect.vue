<template>
    <div class="select">
        <div class="select__content">
            <input type="button"
                   readonly
                   value="Выберите тип системы"
                   class="select__input"
            >
            <button class="select__button">
                <Icon
                    :ico="ICON_ANGLE_TOP"
                    class="select__icon"
                />
            </button>
        </div>
        <div class="select__dropdown">
            <div class="select__list">
                <UiSelectOption v-for="option in optionsList"
                                :key="option"
                                :text="option"
                                class="select__option"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Icon from '@/components/Icon/Icon.vue';
    import {Icons} from '@/components/Icon/icons';
    import UiSelectOption from '@/components/Select/Option/UiSelectOption.vue';

    export default defineComponent({
        name: 'UiSelect',
        components: {UiSelectOption, Icon},
        setup() {
            const optionsList = ['Sed ut perspiciatis', 'Nemo enim ipsam', 'Et harum quidem', 'Temporibus autem', 'Itaque earum rerum'];

            return {
                optionsList,
                ICON_ANGLE_TOP: Icons.IconAngleTop,
            }
        },
    });
</script>

<style lang="scss">
@import 'styles/select.scss';
</style>
