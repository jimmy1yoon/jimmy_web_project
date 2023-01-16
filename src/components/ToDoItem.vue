<template>
    <div>
        <label for="todo-item">
            <input type="checkbox" id="todo-item" :checked="isDone" />
        {{ label }}</label>
    </div>
</template>

<script>
export default {
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean },
    },
    data() {
        return {
            isDone: this.done,
        };
    },
};
</script>
