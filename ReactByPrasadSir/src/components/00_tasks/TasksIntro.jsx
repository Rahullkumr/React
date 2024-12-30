/* 
    To see the proper styling, go to src/index.css and comment following 3 lines:
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
*/


import React from 'react'
import Layout00 from './layout00/Layout00'
import Layout01 from './layout01/Layout01'
import Layout02 from './layout02/Layout02'
import ContextApiTaskIntro from './04_contextApi/ContextApiTaskIntro'

const TasksIntro = () => {
  return (
    <>
      {/* <Layout00/> */}
      {/* <Layout01/> */}
      {/* <Layout02/> */}
      <ContextApiTaskIntro/>
    </>
  )
}

export default TasksIntro
