const app = Vue.createApp({
    data() {
        return {
            user: '',
            bgColor: '',
            shown: true
        };
    },
    methods: {
        toggle() {
            this.shown = !this.shown
        }
    },
    computed: {
        visible() {
            if (this.shown) {
                return 'visible'
            } else {
                return 'hidden'
            }
        }
    },
});

app.mount('#assignment');