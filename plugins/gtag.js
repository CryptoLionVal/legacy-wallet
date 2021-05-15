import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app, isDev }) => {
  if (isDev) return

  const GDPR = localStorage ? localStorage.getItem('GDPR:accepted') : 'true'

  Vue.use(
    VueGtag,
    {
      config: { id: 'G-F9Y4W7BYBQ' },
      appName: 'Crypto Lion',
      bootstrap: GDPR === 'true',
      enabled: GDPR === 'true',
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
