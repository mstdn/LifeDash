<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Footer from './Components/Footer.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});
</script>

<template>
    <GuestLayout title="Welcome">

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <InertiaLink href="/about"
                    class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    role="alert">
                    <span
                        class="text-xs bg-primary-600 rounded-full dark:text-white text-gray-800 px-4 py-1.5 mr-3">Features:</span>
                    <span class="text-sm font-medium">What we are all about</span>
                    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </InertiaLink>
                <h1
                    class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    A simple, clean tool for you.</h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Manage your tasks, notes and contacts from a single point.</p>
                <div
                    class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <InertiaLink href="/register" class="btn btn-primary">
                        Signup
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </InertiaLink>
                    <InertiaLink href="/login"
                        class="btn btn-secondary gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Login
                    </InertiaLink>
                </div>

            </div>
        </section>


        <div class="px-4 mx-auto max-w-screen-xl lg:px-6 mt-6">
            <div class="divider"></div>
        </div>


        <section class="bg-white dark:bg-gray-900">
            <div
                class="gap-8 items-center pt-10 md:pt-16 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
                <img class="w-full dark:hidden" src="/images/cta-dashboard-mockup.svg" alt="dashboard image">
                <img class="w-full hidden dark:block" src="/images/cta-dashboard-mockup-dark.svg" alt="dashboard image">
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                            class="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-sky-400">Your
                            Data<br /></span> Your Control.</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">A place for everything and
                        everything in it's place.</p>
                    <InertiaLink href="/register" class="btn btn-ghost text-white">
                        Get started
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </InertiaLink>
                </div>
            </div>
        </section>

        <div class="px-4 mx-auto max-w-screen-xl lg:px-6 mt-6">
            <div class="divider"></div>
        </div>


        <section class="bg-white dark:bg-gray-900">
            <div class="pb-10 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-md mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for
                        you</h2>
                    <p class="text-gray-500 sm:text-xl dark:text-gray-400">A beautiful interface with a simple goal. Get
                        things done without distraction.</p>
                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#a7081a" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Tasks</h3>
                        <p class="text-gray-500 dark:text-gray-400">Manage and organize your tasks in a simple but
                            clever way.</p>
                    </div>
                    <div>
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#a7081a" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                            </svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Notes</h3>
                        <p class="text-gray-500 dark:text-gray-400">Write endless notes and keep them organized.</p>
                    </div>
                    <div>
                        <div
                            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#a7081a" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">Contacts</h3>
                        <p class="text-gray-500 dark:text-gray-400">Easy access to your contacts and their information.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <div class="px-4 mx-auto max-w-screen-xl lg:px-6 mt-6">
            <div class="divider border-gray-100 dark:border-gray-100"></div>
        </div>

        <Footer />

    </GuestLayout>
</template>
