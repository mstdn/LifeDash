<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import AddTask from './AddTask.vue';
import throttle from "lodash/throttle";
import { ref, watch, computed } from "vue";
import { Inertia } from "@inertiajs/inertia";
import EditTask from "./EditTask.vue";
import { useForm } from '@inertiajs/inertia-vue3';
import MarkCompleted from './MarkCompleted.vue';
import MarkUncompleted from './MarkUncompleted.vue';
import Pagination from '../Components/Pagination.vue';

let props = defineProps({
    tasks: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    throttle(function (value) {
        Inertia.get(
            "/tasks",
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
        form.delete(route('task.destroy', id));
    }
};

const completedTask = computed(() => {
    return props.tasks.data.filter(t => !t.completed).length
});

const uncompletedTask = computed(() => {
    return props.tasks.data.filter(t => t.completed).length
});

</script>
<template>
    <div class="min-h-screen">
        <AppLayout title="Tasks">
            <template #header>
                <h2 class="font-semibold text-xl text-gray-900 dark:text-white leading-tight">
                    Tasks
                </h2>
            </template>

            <div class="py-6">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="overflow-hidden flex">
                        <div class="pb-5 flex justify-between w-full">
                            <div class="flex justify-start">
                                <input type="text" v-model="search" placeholder="Search tasks"
                                    class="input input-bordered w-fit max-w-xs bg-white text-gray-900 dark:bg-gray-800 dark:text-white" />
                            </div>
                            <div class="flex justify-end">
                                <AddTask />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-show="completedTask" class="py-2">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="overflow-visible flex">
                        <div class="pb-5 flex justify-between w-full">

                            <!-- TO DO -->
                            <div class="overflow-visible w-full">
                                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">In progress</h3>
                                <ul class="w-full text-sm font-medium text-gray-900 dark:text-white">

                                    <div v-for="task in tasks.data.filter(t => !t.completed)" :key="task.id">
                                        <li
                                            class="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 mb-2">
                                            <div class="flex items-center pl-3">
                                                <MarkCompleted :task="task" />
                                                <label
                                                    class="py-3 ml-3 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    {{ task.task }}
                                                </label>
                                                <div class="flex items-end">
                                                    <div class="dropdown dropdown-end px-2">
                                                        <label tabindex="0" class="btn btn-ghost">
                                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                                                </path>
                                                            </svg>
                                                        </label>
                                                        <ul tabindex="0"
                                                            class="dropdown-content menu p-2 shadow bg-base-100 dark:bg-gray-700 dark:text-white rounded-box w-52">
                                                            <li>
                                                                <EditTask :task="task" />
                                                            </li>
                                                            <li>
                                                                <button @click="destroy(task.id)" method="post"
                                                                    type="submit" class="btn-link">Delete</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div v-show="uncompletedTask" class="py-2">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="overflow-visible sm:rounded-lg flex">
                        <div class="pb-5 flex justify-between w-full">

                            <!-- Done -->
                            <div class="overflow-visible w-full">
                                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Good job!</h3>
                                <ul class="w-full text-sm font-medium text-gray-900 dark:text-white">

                                    <div v-for="task in tasks.data.filter(t => t.completed)" :key="task.id">
                                        <li
                                            class="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 mb-2">
                                            <div class="flex items-center pl-3">
                                                <MarkUncompleted :task="task" />
                                                <label
                                                    class="py-3 ml-3 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    {{ task.task }}
                                                </label>
                                                <div class="flex items-end">
                                                    <div class="dropdown dropdown-end px-2">
                                                        <label tabindex="0" class="btn btn-ghost">
                                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                                                </path>
                                                            </svg>
                                                        </label>
                                                        <ul tabindex="0"
                                                            class="dropdown-content menu p-2 shadow bg-base-100 dark:bg-gray-700 dark:text-white rounded-box w-52">
                                                            <li>
                                                                <EditTask :task="task" />
                                                            </li>
                                                            <li>
                                                                <button @click="destroy(task.id)" method="post"
                                                                    type="submit" class="btn-link">Delete</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>

                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div class="py-8">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Pagination :links="tasks.links" />
                </div>
            </div>

        </AppLayout>
    </div>
</template>
