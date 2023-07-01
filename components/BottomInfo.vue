<template>
    <div style="position:absolute; right: 2.5rem; bottom: 2.5rem;">
        <div 
            v-if="showInfo"  
            class="pa-2 bg-blue-darken-4 rounded-pill d-flex align-center"
        >   
            <p class="px-8 text-white">This application uses the browser's Local Storage to store data</p>
            <v-btn 
                class="bg-transparent" 
                density="compact" 
                icon="mdi-alpha-x-circle"
                @click="showInfo = !showInfo"
            />
        </div>
       
        <v-btn 
            v-show="!showInfo"
            class="bg-blue-darken-4"
            @click="showInfo = !showInfo"
        >
            Show
        </v-btn>
    </div>
   
</template>

<script setup lang="ts">
    const showInfo = ref(true)
</script>