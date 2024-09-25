import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage';
import MyCounter from '@/components/MyCounter';
import TicTacToe from '@/components/TicTacToe';
import HelloWorld from '@/components/HelloWorld';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/counter',
    name: 'MyCounter',
    component: MyCounter,
  },
  {
    path: '/tictactoe',
    name: 'TicTacToe',
    component: TicTacToe,
  }, 
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
