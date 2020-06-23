import navbar from './components/nav.vue'
import checkout from './components/checkout.vue'
//import helloworld from './components/HelloWorld.vue'
import home from './components/Home.vue'
export default[
    { path:"/nav",
      component:navbar,
    },
    {
        path:"/",
        component:home
    },
    {
      path:"/checkout",
      component:checkout
  }
]