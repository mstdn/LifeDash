<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from '@inertiajs/inertia-vue3';
import Stats from './Widgets/Stats.vue';

let props = defineProps({
    notes: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    throttle(function (value) {
        Inertia.get(
            "/dashboard",
            { search: value },
            {
                preserveState: true,
                replace: true,
                preserveScroll: true
            }
        );
    }, 500)
);

</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-900 dark:text-white leading-tight">
                Dashboard
            </h2>
        </template>


        <div class="p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="flex items-center justify-center">

                    <Stats class="w-full" :notes="notes" />

                </div>
                <div class="flex items-center justify-center">

                    <div class="stats stats-vertical w-full shadow">
                        <div class="stat">
                            <div class="stat-title">Downloads</div>
                            <div class="stat-value">31K</div>
                            <div class="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div class="stat">
                            <div class="stat-title">New Users</div>
                            <div class="stat-value">4,200</div>
                            <div class="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div class="stat">
                            <div class="stat-title">New Registers</div>
                            <div class="stat-value">1,200</div>
                            <div class="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>

                </div>
                <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">3</div>
                <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">4</div>
                <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">5</div>
                <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">6</div>
                <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">7</div>
                <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">8</div>
            </div>
        </div>


    </AppLayout>
</template>
