<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0 completed" type="checkbox" />
            <div class="ms-2 flex-grow-1" title="Double click the text to edit or remove">
                <!-- <div class="relative">
                    <input class="editable-task" type="text" />
                 </div> -->
                <span>{{ task.name }}</span>
            </div>
            <!-- <div class="task-date">24 Feb 12:00</div> -->
        </div>
        <div class="task-actions">
            <button class="btn btn-sm btn-circle btn-outline-secondary me-1">
                <PencilIcon />
            </button>
            <button class="btn btn-sm btn-circle btn-outline-danger">
                <TrashIcon />
            </button>
        </div>
    </li>
</template>

<script setup>
import PencilIcon from '../icons/PencilIcon.vue';
import TrashIcon from '../icons/TrashIcon.vue';

defineProps({
    task: Object,
})
</script>