<template>
    <button type="button" @click="openModalEdit" class="btn-link">
         Edit
    </button>

    <TransitionRoot appear :show="isOpenEdit" as="template">
        <Dialog as="div" @close="closeModalEdit" class="relative z-10">
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
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                Edit a note
                            </DialogTitle>
                            <form @submit.prevent="submit">
                                <div class="mt-2">
                                    <resize-textarea v-model="form.note" :rows="4" :maxHeight="400"
                                        class="textarea textarea-primary h-36 w-full focus:border-transparent focus:ring-0"
                                        ></resize-textarea>
                                </div>
                                <div v-if="form.errors.note" v-text="form.errors.note" class="text-red-500 mt-2"></div>
                                <div class="mt-4">
                                    <div class="flex justify-between">
                                        <select v-model="form.category" name="category" id="category"
                                            class="select select-bordered w-full">
                                            <option disabled value="">Category</option>
                                            <option v-for="category in $page.props.categories" :key="category.id"
                                                :value="category.id">{{ category.name }}</option>
                                        </select>
                                    </div>
                                </div>


                                <div class="mt-4">
                                    <div class="flex justify-between">
                                        <div class="flex justify-start">
                                            <button type="button" class="btn btn-error" @click="closeModalEdit">
                                                Close
                                            </button>
                                        </div>
                                        <div class="flex justify-end">
                                            <button class="btn btn-success" type="submit" :disabled="form.processing">
                                                Update
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
    note: Object,
    categories: Object,
})

const characterCount = computed(() => {
    return form.notes.length
})

let form = useForm({
    note: props.note.note,
    category: props.note.category_id,
});

let submit = () => {
    form.patch(route('note.edit', props.note.id), {
        // forceFormData: true,
        onSuccess: () => [
            isOpenEdit.value = false
        ],
    });
};

const isOpenEdit = ref(false)

function closeModalEdit() {
    isOpenEdit.value = false
}
function openModalEdit() {
    isOpenEdit.value = true
}
</script>
