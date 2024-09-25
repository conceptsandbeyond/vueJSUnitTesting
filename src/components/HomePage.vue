<template>
  <div class="home-page">
    <h1>Welcome to My App</h1>
    <nav class="menu">
      <router-link to="/counter" class="menu-item">Counter</router-link>
      <router-link to="/tictactoe" class="menu-item">Tic Tac Toe</router-link>
      <router-link to="/helloworld" class="menu-item">HelloWorld</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-page {
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

.menu {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.menu-item {
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 5px;
  color: #007bff;
  font-size: 1.2rem;
  transition: background-color 0.3s, color 0.3s;
}

.menu-item:hover {
  background-color: #007bff;
  color: #ffffff;
}
</style>
