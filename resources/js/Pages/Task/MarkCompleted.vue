<template>
    <div>
        <form @click="submit">
            <input id="completed" name="completed" v-model="form.completed" type="checkbox" 
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
    completed: props.task.completed,
});

let submit = () => {
    form.patch(route('task.completed', props.task.id), {
        preserveScroll: true,
        preserveState: true,
    });
}
</script>

let submit = () => {
    form.post("/tasks", {
        forceFormData: true,
        onSuccess: () => [
            form.reset("task", "category"),
            isOpen.value = false
        ],
    });
};