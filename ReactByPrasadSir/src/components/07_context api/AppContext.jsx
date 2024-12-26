import React, { createContext, useState } from 'react'


export let myStore = createContext()

const AppContext = ({children}) => {    // destructuring
    let [state, setState] = useState(0)
  return (
    <myStore.Provider value={{state, setState}}>{children}</myStore.Provider>
  )
}

export default AppContext
