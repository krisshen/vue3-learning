const app = Vue.createApp({
    data() {
        return {
            target: 37,
            current: 0
        }
    },
    methods: {
        add(n) {
            this.current+=n
            console.log(this.current);
        }
    },
    computed: {
        result() {
            if (this.current < this.target) {
                return 'Not there yet'
            } else if (this.current === this.target) {
                return  37
            } else {
                return 'Too much!'
            }
        }
    },
    watch: {
        result(res) {
            console.log('current changed!')
            setTimeout(() => {
                console.log('reset!')
                this.current = 0
            }, 5000)
        }
    }
});

app.mount('#assignment');