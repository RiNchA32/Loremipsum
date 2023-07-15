<template>
    <Button
        color-white
        text="Прикрепить файл"
        class="ordering-button-add-file"
    >
        <label for="file"
               class="ordering-button-add-file__label"
        >
            <input id="file"
                   type="file"
                   class="ordering-button-add-file__input"
            >
        </label>
        <Icon :ico="ICON_ATTACH_FILE"
              class="ordering-button-add-file__icon"
        />
    </Button>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Button from '@/components/Button/Button.vue';
    import Icon from '@/components/Icon/Icon.vue';
    import {Icons} from '@/components/Icon/icons';

    export default defineComponent({
        name: 'OrderingButtonAddFile',
        components: {Icon, Button},
        setup() {
            return {
                ICON_ATTACH_FILE: Icons.IconAttachFile,
            };
        },
    });
</script>

<style lang="scss">
@import 'styles/ordering-button-add-file.scss';
</style>
