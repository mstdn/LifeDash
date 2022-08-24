<template>
    <div>
        <form @click="submit">
            <input checked id="completed" name="completed" v-model="form.completed" type="checkbox"
                class="checkbox checkbox-primary checkbox-sm">
        </form>
    </div>
</template>
<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let props = defineProps({
    task: Object,
});

let form = useForm({
    completed: true,
});

let submit = () => {
    form.patch(route('task.uncompleted', props.task.id), {
        preserveScroll: true,
        preserveState: true,
    });
}
</script>