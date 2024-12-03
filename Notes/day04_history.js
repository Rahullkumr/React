// 03 - Dec - 2024

// History

`
npm trends React Angular Vue Svelte

Angular(2009)   React(2011)     Angular2(2014-15)   Vue(2015-16)



// npm website (registry)
    // everything related to JS like packages, libraries
    // npm is the worlds' largest package/libraries registry
    // npm stands for Node Package Manager

// package installers
    npm (we will use)
    yarn 
    bun 
    pnpm
    spm
    cnpm
    chocolaty

// latest version of React: React 18



// ============================ main.jsx ==========================================


CreateRoot > 
why render() why not append()?
    // because jsx code needs to be converted into browser understandable JS, transpilation

// vvi:

explanation of diagram (component Based Architecture):
    we create various components in different different folders and then import all modules into app.jsx file, this is the file which will communicate with the main.jsx file 
    
    main.jsx file will first target the div which is inside index.html using getElementById() and create a root using CreateRoot() and finally the rendering process will happen which will render the app.jsx inside the main.jsx file


    since all the jsx code will finally come inside main.jsx and index.css is imported inside main.jsx, so the styling applied to different components will work because index.css acts as a global file for styling

    This is how component based architecture will work.
`
// DOM ka kaam kam karne k liye react bna hai