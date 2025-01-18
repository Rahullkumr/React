# LearningReact

Learning React from Prasad Kadam sir

![React Banner](banner.png)

## Content

1. [React Installation Guide](#steps-for-the-installation-of-react)

2. [Steps to run this project locally](#steps-to-run-this-project-locally)

3. [Steps to configure Tailwind in a React project](#steps-to-configure-tailwind)


## Steps for the Installation of React

1. Create a folder and open CMD inside it.
2. Run the command: `npm create vite` and proceed.
    > `npm create vite@latest or npm create vite@versionNumber`
3. Enter a project name.
4. Leave the package name as default.
5. Select the framework (React).
6. Select JavaScript.
7. Run: `cd projectName`.
8. Run: `npm install`.
9. Run: `npm run dev` 🚀.


 ## Steps to run this project locally

 1. Open a terminal and navigate to the folder where you want to clone the repository.
 2. Clone the repository using the following command:

    ```bash
    git clone https://github.com/Rahullkumr/LearningReact.git
    ```
 3. Navigate to the project directory:

    ```bash
    cd LearningReact
    ```
 4. Navigate to particular project:

    ```bash
    cd FirstInstallation
    <!-- or -->
    cd ReactByPrasadSir
    ```
 5. Install the project dependencies:

    ```bash
    npm install
    ```
 6. Start the development server:

    ```bash
    npm run dev
    ```
 7. Open http://localhost:5173 in your browser to view the app.


## Steps to configure Tailwind

1. Install Tailwind CSS and other dependencies

   ```js
   npm install -D tailwindcss postcss autoprefixer
   ```

2. Initialize the Tailwind CSS to create `tailwind.config.js`

   ```js
   npx tailwindcss init
   ```

3. Configure Tailwind css

   > In the tailwind.config.js file, specify the paths to all your template files

   ```js
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   ```
4. Add Tailwind Directives to `src/index.css`
   ```js
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. Ensure this CSS file is imported into the main JavaScript file (i.e `src/main.jsx`)

   ```js
   import './index.css';
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './App';

   ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   );

   ```

6. Now start the dev server
   ```js
   npm run dev
   ```