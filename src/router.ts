import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Installation from './view/Installation.vue';
import Introduction from './view/Introduction.vue';
import Usestep from './view/Usestep.vue';
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
        { path: 'installation', component: Installation },
        { path: 'introduction', component: Introduction },
        { path: 'usestep', component: Usestep },
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'dialog', component: Dialog },
        { path: 'tabs', component: Tabs },
      ]
    },
  ]
})
export { router };