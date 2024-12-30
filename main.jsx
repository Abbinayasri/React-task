import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Slam from './Slam.jsx'
import Apple from './Apple.jsx'
import OneDirec from './OneDirec.jsx'
import Taskone from './Taskone.jsx'
import Poster from './Poster.jsx'
import Tasktwo from './Tasktwo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*<Slam/>*/}
    {/*<Apple/>*/}
    {/*<Taskone/>*/}
    {/*<Poster*/}
    {/*<Tasktwo/>*/}
    {/*<OneDirec name="One-Direction"/>*/}
  </StrictMode>,
)
