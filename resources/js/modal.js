// modal.js
// Get modal elements
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImage");
var closeModal = document.getElementById("closeModal");

// Get all images with the class 'modal-trigger'
var images = document.querySelectorAll('.modal-trigger');

// Loop through each image and add a click event listener
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Set the modal image source to the clicked image
    }
});

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal image, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}