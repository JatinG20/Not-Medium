
/* JavaScript */
// Retrieve the blob element from the HTML
const blob = document.getElementById("blob");

// Event listener that triggers when the pointer (usually mouse) moves
window.onpointermove = event => { 
    // Destructure clientX and clientY properties from the event object, representing the pointer's coordinates
    const { clientX, clientY } = event;
  
    // Initiate an animation on the blob element to move it to the pointer's coordinates
    blob.animate({
        left: `${clientX}px`, /* Move the blob horizontally to the pointer's x-coordinate */
        top: `${clientY}px` /* Move the blob vertically to the pointer's y-coordinate */
    }, { 
        duration: 3000, /* Set the duration of the animation to 3000 milliseconds (3 seconds) */
        fill: "forwards" /* Specify that the end state of the animation should persist after it completes */
    });
}