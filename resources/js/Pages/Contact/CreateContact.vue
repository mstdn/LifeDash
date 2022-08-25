<template>
    <button type="button" @click="openModal" class="btn btn-primary gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        Contact
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
                                <h3 class="text-lg font-medium leading-6 mb-2">
                                    Add contact
                                </h3>

                            </DialogTitle>
                            <form @submit.prevent="submit">

                                <div class="mt-2 flex justify-between">
                                    <div class="flex justify-start pr-2 pb-2">
                                        <input v-model="form.first_name" id="firstname" name="firstname" type="text"
                                            placeholder="Firstname"
                                            class="input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0" />
                                            <div v-if="form.errors.first_name" v-text="form.errors.first_name" class="text-red-500 mt-2"></div>
                                    </div>
                                    <div class="flex justify-end">
                                        <input v-model="form.last_name" id="lastname" name="lastname" type="text"
                                            placeholder="Lastname"
                                            class="input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0" />
                                            <div v-if="form.errors.last_name" v-text="form.errors.last_name" class="text-red-500 mt-2"></div>
                                    </div>
                                </div>
                                <div class="form-control">
                                    <input v-model="form.email" id="email" name="email" type="email"
                                        placeholder="Email Address"
                                        class="input input-bordered input-primary w-full focus:border-transparent focus:ring-0" />
                                        <div v-if="form.errors.email" v-text="form.errors.email" class="text-red-500 mt-2"></div>
                                </div>
                                <div class="form-control mt-2">
                                    <input v-model="form.phone" id="phone" name="email" type="tel"
                                        placeholder="Phone Number"
                                        class="input input-bordered input-primary w-full focus:border-transparent focus:ring-0" />
                                        <div v-if="form.errors.phone" v-text="form.errors.phone" class="text-red-500 mt-2"></div>
                                </div>
                                <div class="form-control mt-2">
                                    <input v-model="form.address" id="address" name="address" type="text"
                                        placeholder="Address details"
                                        class="input input-bordered input-primary w-full focus:border-transparent focus:ring-0" />
                                        <div v-if="form.errors.address" v-text="form.errors.address" class="text-red-500 mt-2"></div>
                                </div>
                                <div class="mt-2 flex justify-between">
                                    <div class="flex justify-start pr-2">
                                        <input v-model="form.city" id="city" name="city" type="text" placeholder="City"
                                            class="input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0" />
                                            <div v-if="form.errors.city" v-text="form.errors.city" class="text-red-500 mt-2"></div>
                                    </div>
                                    <div class="flex justify-end">
                                        <input v-model="form.region" id="region" name="region" type="text"
                                            placeholder="Region"
                                            class="input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0" />
                                            <div v-if="form.errors.region" v-text="form.errors.region" class="text-red-500 mt-2"></div>
                                    </div>
                                </div>
                                <div class="mt-2 flex justify-between">
                                    <div class="flex justify-start pr-2">
                                        <input v-model="form.country" id="country" name="country" type="text"
                                            placeholder="Country Code"
                                            class="input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0" />
                                            <div v-if="form.errors.country" v-text="form.errors.country" class="text-red-500 mt-2"></div>
                                    </div>
                                    <div class="flex justify-end">
                                        <input v-model="form.postal_code" id="postal_code" name="postal_code"
                                            type="text" placeholder="Postal Code"
                                            class="input input-bordered input-primary w-full max-w-xs focus:border-transparent focus:ring-0" />
                                            <div v-if="form.errors.postal_code" v-text="form.errors.postal_code" class="text-red-500 mt-2"></div>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <resize-textarea v-model="form.info" :rows="2" :maxHeight="100"
                                        class="textarea textarea-primary w-full focus:border-transparent focus:ring-0"
                                        placeholder="Extra info"></resize-textarea>
                                        <div v-if="form.errors.info" v-text="form.errors.info" class="text-red-500 mt-2"></div>
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

let form = useForm({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    country: "",
    postal_code: "",
    info: "",
});

let submit = () => {
    form.post("/contacts", {
        forceFormData: true,
        onSuccess: () => [
            form.reset("first_name", "last_name", "email", "phone", "address", "city", "region", "country", "postal_code", "info"),
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
