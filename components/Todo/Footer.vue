<template>
    <v-card-actions class="pa-4 bg-blue-grey-lighten-5">
        <v-form 
            class="w-100" 
            @submit.prevent="() => emit('create')"
        >
            <v-text-field 
                :value="modelValue" 
                @input="$emit('update:modelValue', $event.target.value)"
                class="rounded-circle" 
                variant="solo" 
                label="New Task" 
                hide-details 
                single-line
            >
                <template v-slot:append-inner>
                    <v-icon class="text-blue-darken-4" size="x-large" icon="mdi-plus-circle"
                        @click="() => emit('create')" />
                </template>
            </v-text-field>
        </v-form>
    </v-card-actions>
</template>

<script setup lang="ts">

const props = defineProps({
    modelValue: String
})

const emit = defineEmits(['create', 'update:modelValue'])
</script>
