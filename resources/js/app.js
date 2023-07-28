import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import MainLayout from '@/Layouts/MainLayout.vue'


createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue');
    console.log(1);

    const page = await pages[`./Pages/${name}.vue`]();
    console.log(page);
    page.default.layout = page.default.layout || MainLayout;

    return page;
  },
  // resolve: name => {
  //   const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
  //   return pages[`./Pages/${name}.vue`]
  // },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})