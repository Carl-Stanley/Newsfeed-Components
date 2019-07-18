/* This is the data we will be using, study it but don't change anything, yet. */
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// Create a menu 
function createMenu (arr) {

  var elementDIV = document.createElement("div");
  elementDIV.classList.add('menu');
  var elementUL = document.createElement("ul");
  var elementHeader = document.getElementsByClassName("header")[0];

  var elementLI0 = document.createElement("li");
  var elementLI1 = document.createElement("li");
  var elementLI2 = document.createElement("li");
  var elementLI3 = document.createElement("li");
  var elementLI4 = document.createElement("li");
  var elementLI5 = document.createElement("li");
  

  elementLI0.innerText = 'Students';
  elementLI1.innerText = 'Faculty';
  elementLI2.innerText = "What's New";
  elementLI3.innerText = 'Tech Trends';
  elementLI4.innerText = 'Music';
  elementLI5.innerText = 'Log Out';
  
  elementUL.appendChild(elementLI0);
  elementUL.appendChild(elementLI1);
  elementUL.appendChild(elementLI2);
  elementUL.appendChild(elementLI3);
  elementUL.appendChild(elementLI4);
  elementUL.appendChild(elementLI5);

  elementDIV.appendChild(elementUL);
  elementHeader.appendChild(elementDIV);
}

createMenu(menuItems);

class menuCreate {
  constructor(domElement) {
   
    this.domElement = domElement;   
    
    this.domElement.addEventListener('click', this.expandMenu);

  }
    
  expandMenu(event) {

       event.target.parentNode.classList.toggle('menu--open');
       
  }
}

let menuBtn = document.querySelectorAll('.menu-button');

menuBtn = Array.from(menuBtn).map( menuBtn => new menuCreate(menuBtn));
