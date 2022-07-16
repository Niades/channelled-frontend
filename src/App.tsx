import { VideoRoute } from './routes/video'

const DEFAULT_VIDEO = 'QxwZpAOVj2I'

function App() {
  const routeComponent = <VideoRoute videoId={DEFAULT_VIDEO}></VideoRoute>
  return <div className="App">{routeComponent}</div>
}

export default App
