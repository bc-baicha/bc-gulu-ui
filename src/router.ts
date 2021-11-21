import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Switch from './components/Switchpage/Switch.vue';
import Button from './components/Buttonpage/Button.vue';
import Dialog from './components/Dialogpage/Dialog.vue';
import Tabs from './components/Tabspage/Tabs.vue';
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
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