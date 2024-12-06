// 06 - Dec - 2024

// how many ports are there?
// mdx

// npm = node package manager(installer)
    // - compulsorily download all packages and libraries in your sys means we are downloading the packages and then only we can use them.

// npx = node package executer
    // - npx will download only the necessary packages and remaining packages, we can access without downloading them
    // if u want to use facebook in mobile, we have two ways:
        // 1. downloading the facebook app, which is similar with npm way means we are downloading then only we are using it
        // 2. downloading the browser (necessary package), here in this ex, we are not downloading the facebook but instead we are downloading the necessary package (browser) and executing/using facebook on that package

// npm create-react-app deleteme (500-600MB), npx create-react-app deleteme (300-400MB), npm create vite(60MB) ====> how itna less size?
`
// different ways to install react:
way1: 
    using vite (already done)
    - jsx extension rehta hai, and we cant write jsx components in js file 
    - file size = 55MB
    - default port: 5173
    - 
way2:
    - npx create-react-app falna (in lowercase only)
    - npm start 

// - js extension rehta hai, and we can write jsx components in js file also
// - file size = 308 MB
// - default port: 3000
// - folder str:
    - node_modules
    - public
    - src
    - .gitignore

    
`

// ===============================================================

// how many ports are there?
`
Ports are identified by numbers, ranging from 0 to 65535. 
Here’s a quick overview:
    - Ports 0-1023: Known as well-known ports. These are reserved for core services like HTTP (port 80), HTTPS (port 443), FTP (port 21), and so on.
    - Ports 1024-49151: These are registered ports, typically used by applications and software that require a specific port number.
    - Ports 49152-65535: These are dynamic or private ports, often used for temporary or private purposes, such as dynamic allocation by client applications when initiating outbound connections.
`