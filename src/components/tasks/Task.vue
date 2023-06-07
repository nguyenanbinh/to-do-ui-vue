<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0" 
            :class="completedClass" 
            type="checkbox" 
            :checked="task.is_completed" 
            @change="markTaskAsCompleted"
            />
            <div class="ms-2 flex-grow-1" :class="completedClass" title="Double click the text to edit or remove"
                @dblclick="isEdit = true">
                <div class="relative" v-if="isEdit">
                    <input class="editable-task" type="text" 
                    @keyup.esc="undo" 
                    v-focus
                    @keyup.enter="updateTask"
                    v-model="editingTask" />
                </div>
                <span v-else>{{ task.name }}</span>
            </div>
            <!-- <div class="task-date">24 Feb 12:00</div> -->
        </div>
        <TaskActions @edit="isEdit = true" v-show="!isEdit" @delete="deleteTask" />
    </li>
</template>

<script setup>
import { computed, ref } from 'vue';
import TaskActions from './TaskActions.vue';
const taskProps = defineProps({
    task: Object,
});

const completedClass = computed(() => taskProps.task.is_completed ? "completed" : "");
const isEdit = ref(false);
const vFocus = {
    mounted: el => el.focus()
};
const editingTask = taskProps.task.name;
const emit = defineEmits(['updated', 'completed', 'deleted']);
const updateTask = event => {
    const updatedTask = { ...taskProps.task, name: event.target.value };
    isEdit.value = false;
    emit('updated', updatedTask);
};
const markTaskAsCompleted = () => {
    const updatedTask = { ...taskProps.task, is_completed: !taskProps.task.is_completed };
    emit('completed', updatedTask);
};
const undo = () => {
    isEdit.value = false;
    editingTask.value = taskProps.task.name;
}
const deleteTask = () => {
    if(confirm('Are you sure you want to delete ?')) {
        emit('deleted', taskProps.task);
    }
}
</script>