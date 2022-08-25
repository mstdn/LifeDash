<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from '@inertiajs/inertia-vue3';
import CreateContact from './CreateContact.vue';
import EditContact from './EditContact.vue';
import Pagination from '../Components/Pagination.vue';

let props = defineProps({
    contacts: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    throttle(function (value) {
        Inertia.get(
            "/contacts",
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
        form.delete(route('contact.destroy', id));
    }
};
</script>

<template>
    <AppLayout title="Notes">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-900 dark:text-white leading-tight">
                Contacts 
            </h2>
        </template>

        <div class="pt-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

                    <div class="flex justify-between">
                        <div class="flex justify-start">
                            <input v-model="search" type="text" placeholder="Search for contacts"
                                class="input input-bordered w-full max-w-xs focus:ring-0 bg-white text-gray-900 dark:bg-gray-800 dark:text-white" />
                        </div>
                        <div class="flex justify-end">
                            <CreateContact />
                        </div>
                    </div>

                    <div class="pt-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                            <div v-for="contact in contacts.data" :key="contact.id"
                                class="flex items-center justify-center">
                                <div
                                    class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <div class="flex justify-end px-4 pt-4">
                                        <div class="dropdown dropdown-end">
                                            <label tabindex="0" class="btn btn-xs btn-ghost btn-primary">
                                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                                    </path>
                                                </svg>
                                            </label>
                                            <ul tabindex="0"
                                                class="dropdown-content menu p-2 shadow bg-base-100 dark:bg-gray-700 dark:text-white rounded-box w-52">
                                                <li>
                                                    <EditContact :contact="contact" />
                                                    <!-- <EditNote class="m-2" :note="note" /> -->
                                                </li>
                                                <li>
                                                    <button @click="destroy(contact.id)" method="post" type="submit"
                                                        class="btn-link">Delete</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-center pb-10">
                                        <h5 class="my-1 text-xl font-medium text-gray-900 dark:text-white">
                                            {{ contact.first_name }} {{ contact.last_name }}
                                        </h5>
                                        <span class="text-sm text-gray-500 dark:text-gray-400 p-4 text-center">
                                            {{ contact.info }}
                                        </span>
                                        <div class="flex mt-4 space-x-3 md:mt-6">

                                            <div class="dropdown dropdown-hover">
                                                <label tabindex="0" class="btn btn-sm">Contact</label>
                                                <ul tabindex="0"
                                                    class="dropdown-content menu p-2 shadow bg-white text-gray-900 dark:bg-gray-800 dark:text-white rounded-box w-auto">
                                                    <li>
                                                        <a>{{ contact.email }}</a>
                                                    </li>
                                                    <li>
                                                        <a>{{ contact.phone }}</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="dropdown dropdown-hover">
                                                <label tabindex="0" class="btn btn-sm btn-secondary">Address</label>
                                                <div tabindex="0"
                                                    class="dropdown-content card card-compact w-64 p-2 shadow bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
                                                    <div class="card-body">
                                                        <p>
                                                            {{ contact.address }}
                                                        </p>
                                                        <p>
                                                            {{ contact.city }}
                                                        </p>
                                                        <p>
                                                            {{ contact.postal_code }}
                                                        </p>
                                                        <p>
                                                            {{ contact.region }}
                                                        </p>
                                                        <p>
                                                            {{ contact.country }}
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                <Pagination :links="contacts.links" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
