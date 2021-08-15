const app = Vue.createApp({
    data() {
        return {
            myName: "kris",
            age: 30,
            imgUrl: 'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        };
    },
    methods: {
        favNum () {
            return Math.random();
        }
    },
});

app.mount('#assignment');