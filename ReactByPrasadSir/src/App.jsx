import './App.css'
import TasksIntro from './components/00_tasks/TasksIntro.jsx'
import JsxIntro from './components/01_jsxIntro/JsxIntro.jsx'
import ClassBasedCompIntro from './components/02_typesOfComponents/02_classBasedComp/ClassBasedCompIntro.jsx'
import HooksIntro from './components/03_hooks/HooksIntro.jsx'
import PropsIntro from './components/04_props/PropsIntro.jsx'
import ConditionalRenderingIntro from './components/05_conditionalRendering/ConditionalRenderingIntro.jsx'
import EventsIntro from './components/06_Events/EventsIntro.jsx'

function App() {
  
  return (
    <>
      {/* ============ Tasks ============ */}
            <TasksIntro/>



      {/* ============ Components and its types ============ */}
            {/* <JsxIntro/> */}
            {/* <ClassBasedCompIntro/> */}



      {/* ============ hooks ============ */}
            {/* <HooksIntro/> */}



      {/* ============ hooks ============ */}
            {/* <PropsIntro/> */}



      {/* ============ Conditional Rendering ============ */}
            {/* <ConditionalRenderingIntro/> */}



      {/* ============ Conditional Rendering ============ */}
            {/* <EventsIntro/> */}
    </>
  )
}

export default App
