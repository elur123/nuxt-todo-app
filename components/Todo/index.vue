<template>
    <div class="w-100 h-100 d-flex flex-column justify-center align-center">
        <h3 class="mb-4 mb-md-8 text-h4 text-md-h1 text-white font-weight-bold">Vue ToDo List</h3>
        <v-card class="w-75">
            <TodoHead 
                :tasks="taskStore.tasks"
                :tasksDone="tasksDone"
                @removeDoneTasks="() => taskStore.removeDoneTasks()"
                @removeAllTasks="() => taskStore.removeAllTasks()"
            />

            <v-divider></v-divider>

            <TodoBody 
                :tasks="taskStore.tasks"
                @markAsDone="(index) => taskStore.markAsDone(index)"
                @removeTask="(index) => taskStore.removeTask(index)"
            />

            <v-divider></v-divider>

            <TodoFooter 
                :modelValue="taskStore.name"
                @update:modelValue="(e) => taskStore.name = e"
                @create="taskStore.create"
            />
        </v-card>
    </div>
</template>

<script setup lang="ts">
    const taskStore = useTask()

    const tasksDone = computed(() => {
        return taskStore.tasks.filter((e: any) => e.status.done)
    })
</script>