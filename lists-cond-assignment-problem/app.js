const app = Vue.createApp({
    data() {
        return {
            task: '',
            tasks: [],
            shown: true
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.task)
        },
        toggleTasks() {
            this.shown = !this.shown
        }
    }
});

app.mount('#assignment');