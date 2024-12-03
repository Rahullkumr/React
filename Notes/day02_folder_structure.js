// 30 - Nov - 2024

// PROJECT FOLDER STRUCTURE



// 1. Node modules
    // this folder holds all the packages that are downloaded during the React installation and these packages are necessary for running the React application.
    // Examples of packages: bable, ESLint, rollup (package bundler React concept), vitejs, react, react-dom



// 2. Public (don't use me): 
    // will store static assets like image, audio, etc . It is like assets folder
    // will prefer Assets folder which is present inside src folder rather than this public folder



// 3. src (write everything here)
    // main source folder for writing React code.
    // Components (folder) > about (folder) > about.html, about.css



// 4. .gitignore
    // stores files that needs to be ignored during git push



// 5. eslint.config.js
    // it will give syntax errors while writing the JS code



// 6. index.html 
    // only one html file is there with only one line of html code i.e div)
        // <div id='root'></div>
        // <script type="module" src="/src/main.jsx"></script>
    // we will not write any html code into it (don't touch me).



// 7. package-lock.json
    // will get info of all the packages of node module that are downloaded in the json format



// 8. package.json
    // is like dashboard of the car (can only see limited and necessary package info)



// 9. Readme.md
    // Project related information to show in the Github 
    // project description / instructions for team members



// 10. vite.config.js
    // will contain vite configurations
    // 40% faster than others
    // minimum size of project created using vite (55 MB)



// =============================== package.json ======================================================

// package.json file 
    // version: 5.5.3 (majorUpdate.minorUpdate.patch)
    // scripts



    // dependencies
        // these are major dependencies that are necessary during development as well as production phase.
        // eg: React, react-dom



    // dev dependencies (development dependencies)
        // These are those libraries or packages that are needed during development only and are not required after deployment.
        // eg: eslint, vite