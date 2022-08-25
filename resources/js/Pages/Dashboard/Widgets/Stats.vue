<template>
    <div>
        <div class="stats stats-vertical w-full shadow-lg bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white">
            <div class="stat">
                <div class="stat-title">Tasks</div>
                <div class="stat-value">{{ tasks.total }}</div>
                <div class="stat-desc mt-1">
                    <InertiaLink href="/tasks">
                        Go to tasks
                    </InertiaLink>
                </div>
            </div>

            <div class="stat">
                <div class="stat-title">Notes</div>
                <div class="stat-value">{{ notes.total }}</div>
                <div class="stat-desc">
                    <InertiaLink href="/notes">
                        Go to notes
                    </InertiaLink>
                </div>
            </div>

            <div class="stat">
                <div class="stat-title">Contacts</div>
                <div class="stat-value">{{ contacts.total }}</div>
                <div class="stat-desc">
                    <InertiaLink href="/contacts">
                        Go to contacts
                    </InertiaLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
let props = defineProps({
    notes: Object,
    tasks: Object,
    contacts: Object,
});

</script>
