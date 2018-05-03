import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由页面
import Cart from './Cart.vue'
import Explorer from './Explorer.vue'
import Home from './Home.vue'
import Me from './Me.vue'
//使用路由示例插件
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: _dirname,
    router: [
        //将页面组件与path指定的路由关联
        {path: '/home', component: Home},
        {path: '/explorer', component: Explorer},
        {path: '/cart', component: Cart},
        {path: '/me', component: Me},
    ]
})
