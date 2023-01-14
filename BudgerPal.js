/***************************************************************
 * The essence of this project is to teach how to program and equally how to think like a programmer and not
 * just to memorize codes
 * 
 * For this project there are list of things we are going to do 
 * 
 * HERE IS THE TO DO LIST
 * 
 * 1. Add an event handler
 * 
 * 2. Get input values from data
 *
 * 3. Add the new item to our data structure
 * 
 * 4. Add the new item to the User interface UI
 * 
 * 5. Calculate the budget 
 * 
 * 6 Update the UI
 * 
 * To make the code for this program to look more efficient we are going to use structuring
 * 
 * STRUCTURING CODE WITH MODULES
 * 
 * 
 * MODULES 
 * 
 * i. Modules are important aspect of any robust application's architecture;
 * 
 * ii. Keep the units of code for a project both cleanly separated and organized
 * 
 * iii. Encapsulate some data into privacy and expose other data publicly.
 * 
 * 
 * 
 * So this project would have the  User Interface UI and the Data Module
 * 
 * 
 * The UI module of the Project is going to have the following mode:
 * 
 * i. Get input values
 * 
 * ii. Add the new items to the UI
 * 
 * iii. Update the UI
 * 
 * 
 * The Data Module of the project is going to have the following
 * 
 * i. Add the new item to our data structure
 * 
 * ii. Calculate budget
 * 
 * 
 * The CONTROLLER MODULE: This has the following
 * Add event handler
 * 
 * The controller module controls the entire app and acts as a link between the User Interface module and 
 * the Data module
 * 
 * *********************************************************************************************************
 * In implementing the module pattern the things to learn include the following:
 * 
 * i. How to use the module pattern;
 * 
 * ii. More about private and public data, encapsulation and separation of concerns.
 *
 * iii. Module help to keep pieces of codes that are related to one another together inside of separate
 * independent and organized units. Each of the modules would have variables and functions that are private
 * which means that the would be only accessible inside the module. This is so that no other code would override
 * our data. This means there is going to be the private and the public module.
 * 
 * This project would demonstrate DATA ENCAPSULATION which means that the encapsulated data hides the 
 * implementation detail of a specific module from the outside scope.
 * Hence only the public interface is exposed
 * 
 * Creating module in JavaScript involves the use of the module pattern which very powerful and at the same 
 * time very simple to implement. This makes use of the concepts of closure and immediately invoked function
 * expressions IIFE
 * 
 * Note: IIFEs is simply an anonymous function wrapped in  parenthesis
 * 
 * Note: Because of closure an inner function has always access to the variables and parameters of its outer
 * function even after the outside function has returned
 * 
 * Separation of concerns means that each part of the app should only be interested in doing one thing independently
 * For instance the Data Module can be seen to be separate from the User interface Module
 * 
 * 
 * ************************************************************************************************************
 * SETTING UP EVENT LISTENER TO HANDLE INPUT BUTTON
 * 
 * This involves knowing how to set up event listeners for keypress events
 * 
 * How to use event object.

***************************************************************************************************************
 * CREATING AN INITIALIZATION FUNCTION
 * 
 * How and why to create an initialization function
 *  return {
    init: function () {
      console.log('Application has started.');
      setupEventListeners();
    }
  };

***************************************************************************************************************
CREATING AN INCOME AND EXPENSE FUNCTION
 * Things to learn 
 * How to choose function constructors that meet our application's needs;
 * How to set up a proper data structure for our budget controller.
 * 
 * **********************************************************************************************************
 * ADDING A NEW ITEM TO OUR BUDGET CONTROLLER
 * Things to learn 
 * How to avoid conflicts in our data structures;
 * 
 * How and why to pass data from one module to another.
 * 
 * ***********************************************************************************************************
 * ADDING A NEW ITEM TO THE USER INTERFACE
 * Things to learn from this
 * 
 * A technique for adding big chunks of HTML into the DOM;
 * 
 * How to replace parts of strings;
 * 
 * How to do DOM manipulation using the insertAdjacentHTML method
 * 
 * ***********************************************************************************************************
 * CLEARING AN INPUT FIELDS
 * Things to learn 
 * 
 * How to clear HTML fields;
 * 
 * How to use querySelectorAll.
 * 
 * How to convert a list to an array;
 * 
 * A better way to loop over an array then for loops: for each.
 * 
 * ***********************************************************************************************************
 * UPDATING THE BUDGET CONTROLLER
 * 
 * Things to learn 
 * 
 * How to convert field inputs to numbers;
 * 
 * How to prevent false inputs.
 * 
 * 
 * *************************************************************************************************************
 * UPDATING THE BUDGET OF THE BUDGET CONTROLLER CALCULATE BUDGET
 * 
 * Things to learn
 * 
 * How and why to create simple, reusable functions with only one purpose;
 * 
 * How to sum all elements of an array using the forEach method.
 * 
 * **********************************************************************************************************
 * UPDATING THE BUDGET: UI CONTROLLER
 * 
 * Things to learn
 * 
 * Practice DOM manipulation by updating the budget and total values.
 * 
 * **********************************************************************************************************
 * PROJECT PLANNING AND ARCHITECTURE : STEP 2
 * 
 * Working on the delete function of the project
 * This would include the following
 * 
 * 1. Add event handler
 * 
 * 2. Delete the item from our data structure
 * 
 * 3. Delete the item to the UI
 * 
 * 4. Re-calculate the budget
 * 
 * 5. Update the UI
 * 
 * ***********************************************************************************************************
 * EVENT DELEGATION
 * 
 * Event Bubbling, Target element and event delegation
 * 
 * Event bubbling: This is when an event is triggered or fired on some DOM element, then the exact element is
 * is also triggered on all of the parent elements. That is the event bubbles up in side the DOM tree.
 * 
 * Target element: This is the element that resulted in an event in event bubbling, it could be a clicked button
 * 
 * The target element is stored as a property in the even object.
 * 
 * Event delegation: Attaching an event handler to a parent element when an event that was fired which allows us
 * to perform a particular activity is known event delegation 
 * 
 * USES CASES OF EVENT HANDLER
 * 
 * 1. When we have an element with lots of child elements that we are interested in;
 * 
 * 2. When we want an event handler attached to an element that is not yet in the DOM when ou page is loaded
 * 
 * ***********************************************************************************************************
 * SETTING UP THE DELETE EVENT LISTENER USING EVENT DELEGATION
 * 
 * Things to learn :
 * How to use event delegation in practice;
 * 
 * How to use IDs in HTML to connect the UI with the data model;
 * 
 * How to use the parentNode property for DOM traversing.
 * 
 * ***********************************************************************************************************
 * DELETING AN ITEM FROM THE BUDGET CONTROLLER
 * 
 *  Things to learn :
 * 
 * Yet another method to loop over an array:map;
 * 
 * How to remove elements from an array using the splice method.
 * 
 * *************************************************************************************************************
 * REMOVING THE ITEM FROM THE USER INTERFACE
 * 
 * Things to learn:
 * 
 * More on DOM manipulation: how to remove an element from the DOM.
 * 
 * ***************************************************************************************************************
 * PROJECT PLANNING AND ARCHITECTURE OVERVIEW
 * 
 * Things to learn :
 * 
 * Calculate the percentages
 * 
 * Update percentages in UI
 * 
 * Display the current month and year
 * 
 * Number formatting
 * 
 * Improve input field UX
 * 
 * Reinforcing the concepts and techniques learned so far.
 * ***********************************************************************************************************
 * CREATING A METHOD THAT WOULD CALCULATE THE EXPENSE PERCENTAGES
 * 
 * Things to learn :
 * 
 * How to make our budget controller interact with the Expense prototype.
 * 
 * **************************************************************************************************************
 * UPDATING THE PERCENTAGE UI CONTROLLER FOR EACH OF THE EXPENSES
 * 
 * Things to learn : 
 * 
 * How to create forEach function but for nodeList instead of arrays.
 * **************************************************************************************************************
 * FORMATTING BUDGET NUMBERS WITH STRING MANIPULATION
 * 
 * Things to learn :
 * 
 * How to use different String methods to manipulate strings.
 * 
 * ***************************************************************************************************************
 * DISPLAYING THE CURRENT MONTH AND YEAR IN THE BUDGET APP
 * 
 * Things to learn :
 * 
 * How to get the current date by using the Date object constructor.
 * 
 * **************************************************************************************************************
 * MAKING SOME FINISHING TOUCHES
 * 
 * Things to learn :
 * 
 * How and when to use 'change' events
 * 
*/ 