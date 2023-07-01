export const useTask = defineStore('tasks', () => {
    const tasks: any = ref([]);
    const name = ref('')

    if (typeof window !== 'undefined') {
        onBeforeMount(() => {
            tasks.value = JSON.parse(localStorage.getItem('tasks') || '[]')
        })
    }

    function create() {
        tasks.value.push({
            id: tasks.value.length + 1,
            name: name.value,
            status: {
                done: false
            }
        })

        name.value = ''
        updateLocalStorate()
    }

    function markAsDone(index: number) {
        tasks.value[index].status.done = true
        updateLocalStorate()
    }

    function removeTask(index: number) {
        tasks.value.splice(index, 1)
        updateLocalStorate()
    }

    function removeDoneTasks() {
        tasks.value = tasks.value.filter((e: any) => !e.status.done);
        updateLocalStorate()
    }

    function removeAllTasks() {
        tasks.value = []
        updateLocalStorate()
    }

    function updateLocalStorate() {
        localStorage.setItem('tasks', JSON.stringify(tasks.value))
    }

    return { tasks, name, create, markAsDone, removeTask, removeDoneTasks, removeAllTasks }
})
  
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTask, import.meta.hot))
}
  