<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Add new Task -->
          <NewTask />
          <!-- List of tasks -->
          <!-- List uncompleted task -->
          <Tasks :tasks="uncompletedTasks" />
          <!-- Show toggle btn -->
          <div class="text-center my-3" v-show="showToggleButton">
            <button
              class="btn btn-sm btn-secondary"
              @click="showCompletedTasks = !showCompletedTasks"
            >
              <span v-if="!showCompletedTasks">Show completed</span>
              <span v-else>Hide completed</span>
            </button>
          </div>
          <!-- List completed task -->
          <Tasks
            :tasks="completedTasks"
            v-show="completedTasksIsVisible && showCompletedTasks"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useTaskStore } from "../stores/task";
import { storeToRefs } from "pinia";
import Tasks from "../components/tasks/Tasks.vue";
import NewTask from "../components/tasks/NewTask.vue";
const store = useTaskStore();
const { completedTasks, uncompletedTasks } = storeToRefs(store);
const { fetchAllTasks } = store;
onMounted(async () => {
  await fetchAllTasks();
});

const showToggleButton = computed(
  () => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0
);

const completedTasksIsVisible = computed(
  () => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0
);
const showCompletedTasks = ref(completedTasksIsVisible.value);
</script>
