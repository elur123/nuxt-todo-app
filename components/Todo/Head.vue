<template>
     <div class="pa-4 bg-blue-grey-lighten-5 d-flex justify-end align-center">

        <div class="ps-2 pe-1 py-1 me-2 me-md-4 bg-blue-darken-4 d-flex align-center rounded-xl">
            <span class="me-2 me-md-4 text-body-2">Tasks</span>
            <span class="px-1 bg-white text-blue-darken-4 rounded-circle">{{ tasks.length }}</span>
        </div>

        <div class="ps-2 pe-1 py-1 me-2 me-md-4 bg-blue-darken-4 d-flex align-center rounded-xl">
            <span class="me-2 me-md-4 text-body-2">Tasks Done</span>
            <span class="px-1 bg-white text-blue-darken-4 rounded-circle">{{ tasksDone.length }}</span>
        </div>

        <v-btn 
            v-if="tasksDone.length > 0" 
            class="me-2 me-md-4" 
            color="red" 
            prepend-icon="mdi-trash-can"
            @click="() => emit('removeDoneTasks')"
        >
            <template v-slot:prepend>
                <v-icon color="white"></v-icon>
            </template>

            Tasks Done
        </v-btn>

        <v-btn 
            color="red" 
            prepend-icon="mdi-trash-can"
            @click="() => emit('removeAllTasks')"
        >
            <template v-slot:prepend>
                <v-icon color="white"></v-icon>
            </template>

            Tasks
        </v-btn>

    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    tasks: Array,
    tasksDone: Array,
})

const emit = defineEmits(['removeDoneTasks', 'removeAllTasks'])
</script>
