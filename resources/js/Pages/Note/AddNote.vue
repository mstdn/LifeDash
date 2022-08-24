<template>
    <button type="button" @click="openModal" class="btn btn-primary gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        Note
    </button>

    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-gray-900 flex justify-between">
                                <div class="flex justify-start text-lg font-medium leading-6 mb-2">
                                    Write a note
                                </div>
                                <div class="flex justify-end text-sm">
                                    {{ characterCount }}/5000
                                </div>
                            </DialogTitle>
                            <form @submit.prevent="submit">
                                <div class="mt-2">
                                    <resize-textarea v-model="form.note" :rows="4" :maxHeight="400"
                                        class="textarea textarea-primary h-36 w-full focus:border-transparent focus:ring-0"
                                        placeholder="Write a note.."></resize-textarea>
                                </div>
                                <div v-if="form.errors.note" v-text="form.errors.note" class="text-red-500 mt-2"></div>
                                <div class="mt-4">
                                    <div class="flex justify-between">
                                        <select v-model="form.category" name="category" id="category"
                                            class="select select-bordered w-full">
                                            <option disabled value="">Category</option>
                                            <option v-for="category in $page.props.categories" :key="category.id"
                                                :value="category.id" selected>{{ category.name }}</option>

                                        </select>
                                    </div>
                                </div>


                                <div class="mt-4">
                                    <div class="flex justify-between">
                                        <div class="flex justify-start">
                                            <button type="button" class="btn btn-error" @click="closeModal">
                                                Close
                                            </button>
                                        </div>
                                        <div class="flex justify-end">
                                            <button class="btn btn-success" type="submit" :disabled="form.processing">
                                                Create
                                            </button>

                                        </div>
                                    </div>

                                </div>

                            </form>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { useForm } from "@inertiajs/inertia-vue3";
import { computed } from 'vue';

let props = defineProps({
    categories: Object,
});

const characterCount = computed(() => {
    return form.note.length
});

let form = useForm({
    note: "",
    category: "1",
});

let submit = () => {
    form.post("/notes", {
        forceFormData: true,
        onSuccess: () => [
            form.reset("note", "category"),
            isOpen.value = false
        ],
    });
};

const isOpen = ref(false);

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>
