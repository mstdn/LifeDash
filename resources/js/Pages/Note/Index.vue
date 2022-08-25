<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import AddNote from './AddNote.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from '@inertiajs/inertia-vue3';
import EditNote from './EditNote.vue';
import Pagination from '../Components/Pagination.vue';

let props = defineProps({
    notes: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    throttle(function (value) {
        Inertia.get(
            "/notes",
            { search: value },
            {
                preserveState: true,
                replace: true,
                preserveScroll: true
            }
        );
    }, 500)
);

const form = useForm();
function destroy(id) {
    if (confirm("Are you sure you want to delete?")) {
        form.delete(route('note.destroy', id));
    }
};
</script>

<template>
    <AppLayout title="Notes">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-900 dark:text-white leading-tight">
                Notes
            </h2>
        </template>

        <div class="py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

                    <div class="flex justify-between">
                        <div class="flex justify-start">
                            <input v-model="search" type="text" placeholder="Search notes"
                                class="input input-bordered w-full max-w-xs focus:ring-0 bg-white text-gray-900 dark:bg-gray-800 dark:text-white" />
                        </div>
                        <div class="flex justify-end">
                            <AddNote />
                        </div>
                    </div>

                    <div class="grid grid-flow-row auto-rows-auto">
                        <div v-for="note in notes.data" :key="note.id"
                            class="card card-compact w-auto bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-2 mt-4 rounded-lg overflow-visible">

                            <div class="card-body">
                                <div class="card-title flex justify-between">
                                    <div class="flex justify-start">
                                        <button class="btn btn-primary btn-xs">{{ note.category }}</button>
                                    </div>
                                    <div class="flex justify-end">
                                        <div class="dropdown dropdown-end">
                                            <label tabindex="0" class="btn btn-ghost">
                                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                                    </path>
                                                </svg>
                                            </label>
                                            <ul tabindex="0"
                                                class="dropdown-content menu p-2 shadow bg-base-100 dark:bg-gray-700 dark:text-white rounded-box w-52 text-sm">
                                                <li>
                                                    <EditNote :note="note" />
                                                </li>
                                                <li>
                                                    <button @click="destroy(note.id)" method="post" type="submit"
                                                        class="btn-link">Delete</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-gray-900 dark:text-white text-md">{{ note.note }}</p>
                                <div class="card-actions justify-between">
                                    <div>

                                    </div>
                                    <div>
                                        <div class="badge badge-accent badge-outline badge-sm">
                                            {{ note.time }}
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Pagination :links="notes.links" />

                </div>
            </div>
        </div>

    </AppLayout>
</template>
