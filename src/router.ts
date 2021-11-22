import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Switch from './lib/Switch.vue';
import Button from './lib/Button.vue';
import Dialog from './lib/Dialog.vue';
import Tabs from './lib/Tabs.vue';
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