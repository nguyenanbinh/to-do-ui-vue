<template>
    <div class="task-actions">
        <button class="btn btn-sm btn-circle btn-outline-secondary me-1" @click=" emit('edit')">
            <PencilIcon />
        </button>
        <button class="btn btn-sm btn-circle btn-outline-danger" @click="$event => emit('delete')">
            <TrashIcon />
        </button>
    </div>
</template>

<script setup>
import PencilIcon from '../icons/PencilIcon.vue';
import TrashIcon from '../icons/TrashIcon.vue';

const emit = defineEmits(['edit', 'delete']);
</script>