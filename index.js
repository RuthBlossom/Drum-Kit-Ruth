
/**This line selects the first occurrence of a <button> element in the current HTML document. The document.querySelector() function  allows you to select elements from the document using CSS-style selectors. In this case, it is looking for a button element.
*method attaches an event handler to an element.Common targets are Element, or its children, Document, and Window
*event listener usually has two parameters.The first one is the type which is a case-sensitive string representing the event type to listen to.
*The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
*The second parameter is the function we want to call when the event occurs .listener,
*it finds the first button in our document, then it adds a event listener to that button so that it listens for clicks that happen on that button.
*And when it does it runs the code inside the function handleClick, & that should send us an alert
*The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.
* document.querySelector("button").addEventListener("click", handleClicked); *//** document.querySelector("button").addEventListener("click", handleClicked); //function will execute some code when it is called. function displays a popup dialog box with the message.*/

// Function to play the corresponding drum sound based on the key pressed
function playDrumSoundByKey(key) {
  switch (key) {
    case "w":
      playSound('sounds/tom-1.mp3');
      break;
    case "a":
      playSound('sounds/tom-2.mp3');
      break;
    case "s":
      playSound('sounds/tom-3.mp3');
      break;
    case "d":
      playSound('sounds/tom-4.mp3');
      break;
    case "j":
      playSound('sounds/crash.mp3');
      break;
    case "k":
      playSound('sounds/kick-bass.mp3');
      break;
    case "l":
      playSound('sounds/snare.mp3');
      break;
    default:
      console.log("No sound found for this key");
  }
}

// Function to play sound
function playSound(soundPath) {
  var audio = new Audio(soundPath);
  audio.play();
}

// Attach event listeners to drum buttons
document.addEventListener("DOMContentLoaded", function() {
  var drumButtons = document.querySelectorAll(".drum");

  drumButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Play corresponding audio based on the innerHTML of the button
      playDrumSoundByKey(this.innerHTML);

      // Change the style of the clicked button
      this.style.color = "white";

      // Reset button style after a delay (e.g., 300 milliseconds)
      setTimeout(function() {
        button.style.color = ""; // Reset the color to its default
      }, 300);
    });
  });

  // Listen for keydown events on the document
  document.addEventListener("keydown", function(event) {
    // Get the key that was pressed
    var key = event.key.toLowerCase();

    // Check if the pressed key corresponds to a drum button
    if (["w", "a", "s", "d", "j", "k", "l"].includes(key)) {
      // Play corresponding audio based on the pressed key
      playDrumSoundByKey(key);

      // Get the drum button corresponding to the pressed key
      var button = document.querySelector("." + key);

      // Change the style of the corresponding drum button
      if (button) {
        button.style.color = "white";

        // Reset button style after a delay (e.g., 300 milliseconds)
        setTimeout(function() {
          button.style.color = ""; // Reset the color to its default
        }, 300);
      }
    }
  });
});







/**This for loop iterates over each drum button on the page. For each iteration, it performs the following steps:

    It selects the current drum button using document.querySelectorAll(".drum")[i] and stores it in the drumButton variable.

    It attaches an event listener to the drum button using the addEventListener() method. The event being listened to is the "click" event.

    Inside the event listener function, function() { ... }, this refers to the current drum button that triggered the event.

    It sets the style.color property of the current drum button to "white". This line modifies the CSS style of the button and changes the text color to white.

    Finally, it logs the innerHTML of the current drum button to the console. This displays the content inside the button when clicked.

    By setting the style.color property to "white" within the event listener, the text color of the clicked drum button is changed to white, effectively updating the appearance of the */