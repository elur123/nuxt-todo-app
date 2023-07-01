<template>
    <v-card-text 
        class="pa-8 overflow-y-auto" 
        style="height: 250px;"
    >
        <v-hover 
            v-for="(task, index) in tasks" 
            :key="task.id" 
            v-slot="{ isHovering, props }" 
            open-delay="100"
        >
            <v-list-item 
                class="border rounded-lg mb-4" 
                style="cursor:pointer;" 
                v-bind="props"
            >
                <template v-slot:prepend>
                    <v-btn 
                        :color="task.status.done ? 'gray': 'success'" 
                        icon="mdi-check-circle-outline" 
                        variant="text"
                        @click="() => emit('markAsDone', index)"
                    ></v-btn>
                </template>

                <p :class="task.status.done ? 'font-weight-regular text-decoration-line-through' : 'font-weight-bold'">
                    {{ task.name }}
                </p>

                <template v-if="isHovering" v-slot:append>
                    <v-btn 
                        color="red" 
                        icon="mdi-trash-can" 
                        variant="text"
                        @click="() => emit('removeTask', index)"
                    ></v-btn>
                </template>
            </v-list-item>
        </v-hover>

    </v-card-text>
</template>

<script setup lang="ts">

const props = defineProps({
    tasks: Array,
})

const emit = defineEmits(['markAsDone', 'removeTask'])
</script>
