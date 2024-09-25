<template>
  <div class="counter">
    <h1>Counter</h1>
    <p>Count: <span class="count">{{ count }}</span></p>
    <button @click="increment" class="increment-button">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<style scoped>
.counter {
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.count {
  font-size: 2rem;
  font-weight: bold;
  color: #007bff; /* Accent color for count */
}

button.increment-button {
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 20px;
}

button.increment-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}
</style>
