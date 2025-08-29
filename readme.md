1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

## Answer:

**getElementById:** This method finds a single element by its unique id. Since every id is supposed to unique in a HTML file, it only returns only one element.

**getElementsByClassName:** This method returns a group of elements that share the same class.As a class can be shared by one or more elements, it returns a collection of elements.

**querySelector** This method picks the first element that matches a specific CSS style selector like class, id, div, h1, p etc

**querySelectorAll** This method is similar to querySelector.But instead of returning one element it grabs all matches and returns them as a Nodelist.

---

2. How do you **create and insert a new element into the DOM**?

## Answer:

To create and insert a new element into the DOM,

First,create the element using createElement() and set innerText or innerHTML.

Secondly, find the parent where you will insert the new element.

Lastly, attach it to DOM with method like apppendChild().

---

3. What is **Event Bubbling** and how does it work?

## Answer:

Event bubbling means when an event happens on an element it travels upwards to its parents, then its grandparents, and so on.

Event bubbling works like this: If one clicks on an element which has a event attached to it, the event first triggers on that exact element, then move upwards step by step through its parent elements until it reaches the document root.Each parent has a chance to react if its listening.

---

4. What is **Event Delegation** in JavaScript? Why is it useful?

## Answer:

Event Delegation is a technique where instead of attaching listener to every child element, we attach a single listener to their parent element.As the events bubble up, the parent can catch them and determine which child caused the event using event.target.

Event delegation is a pattern to handle events more efficiently.It saves space by minimizing the code and works great when elements are added dynamically.

---

5. What is the difference between **preventDefault() and stopPropagation()** methods?

## Answer:

**preventDefault():** It stops the browsers default/built in actions for an event like stopping a form from reloading the page or preventing a link from opening.

**stopPropagation():** It blocks the event from traveling up to parent elements.So a child's event would not accidentally trigger the parent's.

---
