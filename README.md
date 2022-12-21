# camp8-state-exercises
Some exercises for react `useState`.

Links you <s>might</s> <b>will</b> need: ;)

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color


## Exercise 1 - Feedback form
Using `useState` and simple types
String, number, boolean

### 1a String
Create a simple text input for your users name and displays the users name below.

### 1b Number
Create a textarea form element that has a character count, that gets updated (thereby decremented) as the user types into the textarea HTML Element.

The maximum amount of characters must be an input property for component.

### 1c Boolean
Create a HTML Input of type "checkbox", that confirms that you are not drunk or projecting other emotions/subjective-biases onto this feedback - ensuring that feedback entered into this form is entirely objective.

Use `useState` to store the boolean value.

## Exercise 2
`useState` and complex types
Object, array

### 2a Object
You want to find out what the users 3 top favourite colours is.
Use the HTML input with type "color" to collect the users 1st, 2nd and 3rd favourite colour, in 3 seperate inputs.

Initialise one `useState` with an object containing 3 keys:
- first
- second
- third

Write an onInput handler that saves the value of each individual input, to their respective key, in the stateful object.

(DO NOT MUTATE STATE)

### 2b Array
You are planning a party for all the people who completed this form, you need a guestlist of names.

Use the HTML Input with type "text", and use onChange to allow the user to add a name when they press 'Enter' when focused on the HTML Input.

Write an onChange handler that will save the inputted name to a stateful array.

(ALWAYS REMEMBER: <b>DO NOT MUTATE STATE!</b>)


## Extension
Create a form submission method handler that prevents the default behaviour of the onSubmit method.

Create a button inside the form, that is disabled until the checkbox in your form has been checked.