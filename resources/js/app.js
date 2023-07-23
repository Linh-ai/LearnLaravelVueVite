import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue')
    console.log('resolve', Date.now());
    return (await pages[`./Pages/${name}.vue`]())
  },
  // resolve: name => {
  //   const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
  //   return pages[`./Pages/${name}.vue`]
  // },
  setup({ el, App, props, plugin }) {
    console.log('setup', Date.now());

    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})