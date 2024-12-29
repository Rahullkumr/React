import './App.css'
import TasksIntro from './components/00_tasks/TasksIntro.jsx'
import JsxIntro from './components/01_jsxIntro/JsxIntro.jsx'
import TypesOfCompIntro from './components/02_typesOfComponents/TypesOfCompIntro.jsx'
import HooksIntro from './components/03_hooks/HooksIntro.jsx'
import PropsIntro from './components/04_props/PropsIntro.jsx'
import ConditionalRenderingIntro from './components/05_conditionalRendering/ConditionalRenderingIntro.jsx'
import EventsIntro from './components/06_Events/EventsIntro.jsx'
import ContextApiIntro from './components/07_useEffect/UseEffectIntro.jsx'
import ContextApiIntro from './components/08_context api/ContextApiIntro.jsx'
import DataFlowIntro from './components/09_dataFlow/DataFlowIntro.jsx'
import UseRefIntro from './components/10_useRefHook/UseRefIntro.jsx'

function App() {
  
  return (
    <>
      {/* ============ Tasks ============ */}
            {/* <TasksIntro/> */}

      {/* ============ Components and its types ============ */}
            {/* <JsxIntro/> */}
            {/* <TypesOfCompIntro/> */}

      {/* ============ hooks ============ */}
            {/* <HooksIntro/> */}

      {/* ============ props ============ */}
            {/* <PropsIntro/> */}

      {/* ============ Conditional Rendering ============ */}
            {/* <ConditionalRenderingIntro/> */}

      {/* ============ Event handling ============ */}
            {/* <EventsIntro/> */}

      {/* ============ useEffect Hook ============ */}
            {/* <UseEffectIntro/> */}
            
      {/* ============ context api ============ */}
            {/* <ContextApiIntro/> */}

      {/* ============ Data Flow ============ */}
            {/* <DataFlowIntro/> */}
            
      {/* ============ useRef hook ============ */}
            <UseRefIntro/>

    </>
  )
}

export default App
