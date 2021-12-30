<template>
  <section>
    <form @submit.prevent="addUserData">
      <div>
        <label>Name</label>
        <input type="text" v-model="name" />
        </div>
      <div>
        <label>Age</label>
        <input type="text" v-model="age" />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['add-user-data'],
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    addUserData() {
      // console.log(`${this.name}, ${this.age}`);
      this.$emit('add-user-data', this.name, this.age)
    }
  }
};
</script>
