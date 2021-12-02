import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Switch from './components/Switchpage/Switchdemo.vue';
import Button from './components/Buttonpage/Buttondemo.vue';
import Dialog from './components/Dialogpage/Dialogdemo.vue';
import Tabs from './components/Tabspage/Tabsdemo.vue';
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      redirect: "/doc/switch",
      children: [
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'dialog', component: Dialog },
        { path: 'tabs', component: Tabs },
      ]
    },
  ]
})
export { router };