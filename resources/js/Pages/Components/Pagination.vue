<template>
    <div v-if="links.length > 3">
        <div class="flex flex-wrap -mb-1">
            <div class="btn-group">
                <template v-for="(link, key) in links">
                    <Link preserve-scroll v-if="link.url === null" :key="key" class="
                        btn
                        btn-sm
                        btn-disabled
                    " v-html="link.label"></Link>
                    <Link preserve-scroll v-else class="
                        btn
                        btn-sm
                    " :class="{ 'btn-active': link.active }" :href="link.url" v-html="link.label"></Link>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    components: {
        Link,
    },

    props: {
        links: Array,
    },
};
</script>