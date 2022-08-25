<script setup>
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Components/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import JetButton from '@/Components/Button.vue';
import JetInput from '@/Components/Input.vue';
import JetInputError from '@/Components/InputError.vue';
import JetCheckbox from '@/Components/Checkbox.vue';
import JetLabel from '@/Components/Label.vue';

const form = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout title="Register">

        <template #header>
            <h2 class="font-semibold text-xl text-gray-900 dark:text-white leading-tight">
                Signup for free
            </h2>
        </template>

        <JetAuthenticationCard>

            <form @submit.prevent="submit">
                <div>
                    <JetLabel for="name" value="Name" />
                    <JetInput id="name" v-model="form.name" type="text" required autofocus
                        autocomplete="name" />
                    <JetInputError class="mt-2" :message="form.errors.name" />
                </div>

                <div class="mt-4">
                    <JetLabel for="username" value="Username" />
                    <JetInput id="username" v-model="form.username" type="text" required
                        autocomplete="username" />
                    <JetInputError class="mt-2" :message="form.errors.username" />
                </div>

                <div class="mt-4">
                    <JetLabel for="email" value="Email" />
                    <JetInput id="email" v-model="form.email" type="email" required />
                    <JetInputError class="mt-2" :message="form.errors.email" />
                </div>

                <div class="mt-4">
                    <JetLabel for="password" value="Password" />
                    <JetInput id="password" v-model="form.password" type="password" required
                        autocomplete="new-password" />
                    <JetInputError class="mt-2" :message="form.errors.password" />
                </div>

                <div class="mt-4">
                    <JetLabel for="password_confirmation" value="Confirm Password" />
                    <JetInput id="password_confirmation" v-model="form.password_confirmation" type="password"
                     required autocomplete="new-password" />
                    <JetInputError class="mt-2" :message="form.errors.password_confirmation" />
                </div>

                <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
                    <JetLabel for="terms">
                        <div class="flex items-center">
                            <JetCheckbox id="terms" v-model:checked="form.terms" name="terms" />

                            <div class="ml-2">
                                I agree to the <InertiaLink target="_blank" :href="route('terms')"
                                    class="underline text-sm text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">Terms of Service</InertiaLink> and
                                <InertiaLink target="_blank" :href="route('privacy')"
                                    class="underline text-sm text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">Privacy Policy</InertiaLink>
                            </div>
                        </div>
                    </JetLabel>
                </div>

                <div class="flex items-center justify-end mt-4">
                    <Link :href="route('login')" class="underline text-sm dark:text-white text-gray-600 hover:text-gray-900 dark:hover:text-gray-300">
                    Already registered?
                    </Link>

                    <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Register
                    </JetButton>
                </div>
            </form>
        </JetAuthenticationCard>
    </GuestLayout>
</template>
