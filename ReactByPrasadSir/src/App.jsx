import './App.css'
import Layout00 from './components/00_tasks/Layout00.jsx'
import Layout01 from './components/00_tasks/Layout01.jsx'
import Layout02 from './components/00_tasks/Layout02.jsx'
import JsxIntro from './components/01_jsxIntro/JsxIntro.jsx'

function App() {

  return (
    <>
{/* ============ Tasks ============ */}
      <Layout00/>
      <Layout01/>
      <Layout02/>



{/* ============ Components ============ */}
      <JsxIntro/>
      
    </>
  )
}

export default App
