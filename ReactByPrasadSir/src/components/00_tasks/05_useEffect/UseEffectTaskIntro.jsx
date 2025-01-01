// 1. Fetch and Display Data

// Task:

// Fetch a list of users from the JSONPlaceholder API when the component mounts.

// Display the user names and emails in a styled list.

// Use the useEffect hook to perform the API call only once (on component mount).

// Show a "Loading..." message while the data is being fetched.


// Bonus: Add error handling and display an error message if the API call fails.


// ---


// 2. Window Resize Listener

// Task:

// Use useEffect to track the browser window size (width and height).

// Display the current dimensions in real-time.

// Add an event listener to the resize event and update the state when the window is resized.

// Ensure the event listener is cleaned up when the component unmounts.


// Bonus: Style the dimensions as a floating box on the screen.


// ---

// 3. Countdown Timer

// Task:

// Create a countdown timer that starts from 10 seconds and counts down to 0.

// Use useEffect with setInterval to update the timer every second.

// Stop the countdown automatically when it reaches 0.


// Bonus: Display "Time's up!" when the countdown finishes.

// ---

// 4. Local Storage Sync

// Task:

// Create a simple theme switcher (dark/light mode).

// Use useEffect to save the selected theme to localStorage whenever it changes.

// On component mount, read the saved theme from localStorage and apply it.


// ---


// Bonus: Change the background color of the screen dynamically based on the mouse position.


// ---

// 5. Dynamic Background Color

// Task:

// Create a component where the background color changes every 2 seconds.

// Use useEffect with setInterval to update the background color randomly.

// Clean up the interval when the component unmounts.


// Bonus: Add a "Pause" button to stop the color change.


// ---

// 6. Scroll Position Tracker

// Task:

// Use useEffect to track the user's scroll position on the page.

// Display a progress bar at the top of the page that fills based on the scroll progress.


// Bonus: Change the color of the progress bar based on the percentage (e.g., green for <50%, yellow for 50-80%, red for >80%).


// ---

// 7. Fetch Data on Interval

// Task:

// Create a component that fetches the current weather data from an API (e.g., OpenWeatherMap API) every 10 seconds.

// Use useEffect with setInterval to perform the fetch repeatedly.

// Display the weather information dynamically.


// Bonus: Add a button to stop or resume the periodic fetch.


// ---

// 8. Notification Pop-Up

// Task:

// Display a notification pop-up 5 seconds after the component mounts.

// Use useEffect with setTimeout to trigger the notification.

// Add a "Dismiss" button to hide the notification.


// Bonus: Animate the notification when it appears and disappears.


// ---

// 9. Auto-Save Form Data

// Task:

// Create a form where users can enter text into an input field.

// Use useEffect to auto-save the form data to localStorage whenever the input changes.


// Bonus: Add a "Clear Form" button to reset the input and localStorage.


// ---

// 10. API Error Retry

// Task:

// Fetch data from an API and display it.

// If the API call fails, display an error message and retry the fetch every 5 seconds until it succeeds.

// Use useEffect to implement the retry logic.


// Bonus: Add a "Stop Retry" button to cancel the retries.