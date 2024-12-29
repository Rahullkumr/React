import React from 'react'

const ContextApiTaskIntro = () => {
  return (
    <div>
      
    </div>
  )
}

export default ContextApiTaskIntro

 
// 1. Basic Counter App

// Task:

// Create a counter app with a useState hook to track the count value.

// Add three buttons: "Increment," "Decrement," and "Reset."

// Clicking "Increment" increases the count by 1, "Decrement" decreases it by 1, and "Reset" sets the count back to 0.

// Display the count in the center of the screen, styled with a large font size.


// Bonus: Disable the "Decrement" button when the count is 0 to prevent negative values.


// ---

// 2. Toggle Visibility

// Task:

// Build a component with a button and a paragraph of text.

// Use the useState hook to manage whether the paragraph is visible or hidden.

// Initially, the text should be visible. Clicking the button toggles its visibility.

// The button text should dynamically update to "Show" or "Hide" based on the current state.



// ---

// 3. Dynamic Form Input

// Task:

// Create an input field where users can type their name.

// Use useState to store the input value.

// Display the entered name in real-time below the input field with the text: "Hello, [Name]!"

// If the input field is empty, display "Hello, Stranger!" instead.


// Bonus: Style the greeting text to make it visually appealing.


// ---

// 4. Theme Switcher

// Task:

// Create a dark/light mode toggle button.

// Use useState to manage the current theme ("light" or "dark").

// When in dark mode, change the background color to black and the text color to white.

// When in light mode, change the background color to white and the text color to black.

// Display the current mode (e.g., "Dark Mode" or "Light Mode") in a heading.

// ---

// 5. Counter with Step Size

// Task:

// Create a counter app where users can set a "step size" (e.g., 2, 5, or 10).

// Use an input field to take the step size and store it using useState.

// Add buttons to increment and decrement the count by the step size.

// Reset the count to 0 when the "Reset" button is clicked.


// Bonus: Validate the step size to ensure it's a positive number.


// ---

// 6. Multi-Step Form

// Task:

// Create a multi-step form with 3 steps:

// 1. Step 1: Collect the user's name.


// 2. Step 2: Collect the user's email.


// 3. Step 3: Display a confirmation message with the entered data.



// Use useState to track the current step and the data entered in each step.

// ---

// 7. Random Quote Generator

// Task:

// Create a button labeled "Get Quote."

// Use useState to store a random quote from a predefined array of quotes.

// When the button is clicked, display a new random quote.

// Style the quotes to appear in a centered card with some padding and a background color.


// Bonus: Add the author's name below the quote.


// ---

// 8. Live Character Counter

// Task:

// Create a text area for users to type in.

// Use useState to track the length of the text entered.

// Display a live character count below the text area, e.g., "Characters: 120/200".

// Prevent users from typing more than 200 characters.


// Bonus: Change the character count color to red when the user nears the limit.


// ---

// 9. Shopping Cart

// Task:

// Create a shopping cart app with two products (e.g., "Apple" and "Banana").

// Use useState to track the quantity of each product in the cart.

// Add buttons for each product to "Add to Cart" and "Remove from Cart."

// Display the total quantity of items in the cart.


// Bonus: Display the cart total dynamically based on product prices.