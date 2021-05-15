import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app, isDev }) => {
  if (isDev) return

  Vue.use(
    VueGtag,
    {
      config: { id: 'G-F9Y4W7BYBQ' },
      appName: 'Crypto Lion',
      bootstrap: false,
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
