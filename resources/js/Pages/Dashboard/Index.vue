<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from '@inertiajs/inertia-vue3';
import Stats from './Widgets/Stats.vue';
import Tasks from './Widgets/Tasks.vue';
import Notes from './Widgets/Notes.vue';
import NotesSection from './Sections/NotesSection.vue';

let props = defineProps({
    notes: Object,
    notescount: Object,
    tasks: Object,
    contacts: Object,
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

        <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                <div class="flex items-center justify-between">
                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                            class="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-sky-400">Your
                            Data.</span><br /> Your Control.</h1>

                </div>
                <div class="flex items-center justify-between">
                    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Keep track of your life with software that you control.</p>
                </div>
            </div>
        </div>

        <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="flex items-center justify-center">

                    <Stats class="w-full" :notes="notes" :tasks="tasks" :contacts="contacts" />

                </div>
                <div class="flex items-center justify-center">


                </div>
                <div class="flex items-center justify-center">


                </div>
            </div>
        </div>

        <NotesSection :notes="notes" />



    </AppLayout>
</template>
