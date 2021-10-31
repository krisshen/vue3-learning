const app = Vue.createApp({
    data() {
        return {
            output1: '',
            result: ''
        }
    },
    methods: {
        alertMe() {
            return alert('hello');
        },
        kdown(event) {
            this.output1 = event.target.value;
        },
        getResult() {
            this.result = this.output1;
        }
    }
});

app.mount('#assignment');