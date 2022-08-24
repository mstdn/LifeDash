import './bootstrap';
import '../css/app.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import AppLayout from '@/Layouts/AppLayout.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import ResizeTextarea from 'resize-textarea-vue3';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Pash';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(ResizeTextarea)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .component('AppLayout', AppLayout)
            .component('GuestLayout', GuestLayout)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#a7081a' });
