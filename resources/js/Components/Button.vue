<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="btn btn-primary disabled:opacity-25 transition">
        <slot />
    </button>
</template>
