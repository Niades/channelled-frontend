import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

const routes = [{ name: 'video', path: '/:youtubeVideoId' }]

const router = createRouter(routes)

router.usePlugin(
  browserPlugin({
    useHash: true,
  })
)

router.start()

export { router }
