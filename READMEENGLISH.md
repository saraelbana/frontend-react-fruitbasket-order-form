# Task Description

## Introduction
Your friends Freek and Bernard are both seasoned hospitality professionals, but due to the global pandemic, they unfortunately lost their jobs. Fortunately, Freek and Bernard are resourceful individuals, so they've started a business together:

![company-logo](/Users/Sara/Documents/Frontend Folder/frontend-react-fruitbasket-order-form/src/assets/screenshot-logo.png)

You might wonder if it was wise to let Bernard's 9-year-old niece design the logo, but that's beside the point. You're just glad they have something to do. That's why you want to lend them a hand by creating an online order form!

## Starting the Application
Once you've cloned the project to your local machine, first install the `node_modules` by running the following command in the terminal:

`npm install`

Once this is done, you can start the application using:

`npm run dev`

or use the WebStorm button (npm run dev). Open http://localhost:5173 to view the page in the browser. Start making changes in `src/App.js`: every time you save a file, the changes will be visible on the web page.

## Task 1 - State
Users will create their own fruit basket. They have the choice between four types of fruit, of which they can determine the quantities:

![fruit-counters](/Users/Sara/Documents/Frontend Folder/frontend-react-fruitbasket-order-form/src/assets/screenshot-fruit-counters.png)

As you can see, styling is not important at first; focus on functionality. If you have extra time, feel free to check out the bonus tasks!

### Requirements for fruit counters
* Utilize the useState hook from React to keep track of quantities.
* Customers are free to choose between four types of fruit:
    1. Bananas 🍌
    2. Strawberries 🍓
    3. Apples 🍏
    4. Kiwis 🥝
* Each type of fruit has two buttons: one to increase the quantity (`+`) and one to decrease the quantity (`-`).
* The user cannot decrease the quantity below 0.
* The quantity of selected fruit types is displayed to the user with each update.
* There is also a reset button that sets all counters back to 0.

## Task 2 - Building the Form
It's difficult to order a fruit basket if we don't know where it should be delivered. That's why we're going to create an order form:

![form-without-styling](/Users/Sara/Documents/Frontend Folder/frontend-react-fruitbasket-order-form/src/assets/screenshot-form.png)

As you can see, styling is not important at first; focus on functionality. If you have extra time, feel free to check out the bonus tasks!

### Requirements for the form
* The form contains the following fields:
    * First name
    * Last name
    * Age
    * Postal code
    * Select box with delivery frequency. _Options_: every week, every other week, every month
    * Radio buttons with time slot. _Options_: daytime, evening
    * Note (textarea)
    * Agreement with terms and conditions (checkbox)
    * Submit button
* Only when the user clicks submit, the form values and the fruit values will be logged in the console!

## Task 3 - Creating Components
Create custom components for elements that are reused frequently. To achieve this, you'll need to maintain the state in `App.js` and pass both values and functions as properties _(callback props)_. This includes:
* The reset and submit buttons (they look very similar, don't they?)
* The - counter + combination
* The label and text-input combination
* And so on!

## Bonus Tasks
* Create a nicely styled page!
* Use one combined `onChange` handler function for all types of fruit.
* While you're at it, add conditional styling to the buttons. For example, when a fruit type is clicked once or more, you could give it a colored border!