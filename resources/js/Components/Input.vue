<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        ref="input"
        class="input input-bordered input-primary w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>
