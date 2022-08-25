<template>
    <div>
        <div class="stats stats-vertical w-full shadow">
            <div class="stat">
                <div class="stat-title">Tasks</div>
                <div class="stat-value">x</div>
                <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div class="stat">
                <div class="stat-title">Notes</div>
                <div class="stat-value">{{ notes.total }}</div>
                <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div class="stat">
                <div class="stat-title">Contacts</div>
                <div class="stat-value">x</div>
                <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
        </div>
    </div>
</template>
<script setup>
let props = defineProps({
    notes: Object,
});

</script>
