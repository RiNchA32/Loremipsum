<template>
    <div ref="select"
         class="select"
    >
        <div class="select__content">
            <input @click="showDropdown"
                   type="button"
                   readonly
                   value="Выберите тип системы"
                   class="select__input"
            >
            <button @click="showDropdown"
                    class="select__button"
            >
                <Icon
                    :ico="ICON_ANGLE_TOP"
                    :class="!dropdown && 'select__icon--is-close'"
                    class="select__icon"
                />
            </button>
        </div>
        <transition name="transition-fade">
            <div v-show="dropdown"
                 class="select__dropdown"
            >
                <div class="select__list">
                    <UiSelectOption v-for="option in optionsList"
                                    :key="option"
                                    :text="option"
                                    class="select__option"
                    />
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue';
    import {onClickOutside} from '@vueuse/core';

    import Icon from '@/components/Icon/Icon.vue';
    import {Icons} from '@/components/Icon/icons';
    import UiSelectOption from '@/components/Select/Option/UiSelectOption.vue';

    export default defineComponent({
        name: 'UiSelect',
        components: {UiSelectOption, Icon},
        setup() {
            const optionsList = ['Sed ut perspiciatis', 'Nemo enim ipsam', 'Et harum quidem', 'Temporibus autem', 'Itaque earum rerum'];

            const dropdown = ref(false);
            const select = ref<HTMLElement>();

            function showDropdown() {
                dropdown.value = !dropdown.value;
            }

            onClickOutside(select, () => {
                dropdown.value = false;
            });

            return {
                select,
                dropdown,
                showDropdown,
                optionsList,
                ICON_ANGLE_TOP: Icons.IconAngleTop,
            }
        },
    });
</script>

<style lang="scss">
@import 'styles/select.scss';
@import 'styles/transition-fade.scss';
</style>
