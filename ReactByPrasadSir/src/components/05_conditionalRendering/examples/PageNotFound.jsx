import React, { useState } from 'react'

const PageNotFound = () => {
    let [theme, setTheme] = useState('dark')
    return <div>
        <h1 style={theme == 'light'?{}:{backgroundColor:'black', color: 'white'}}>Page Not Found</h1>
    </div>
}

export default PageNotFound
