/*

console.log("Helllooo");

//setInterval will call a function
// every Nms

let count = 0;

function printCountAndIncrement(){
    count++;
    console.log(count);
}

// call our function every 3 seconds
setInterval(printCountAndIncrement, 3000);
*/

const slideShowImage = document.getElementById("slide-show-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", () => {
   if(currentImageIndex > 1){ 
    updateImage("prev");
   }
})
nextButton.addEventListener("click", () => {
    if(currentImageIndex < 3){ 
        updateImage("next");
       }
    })

let imageUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/2560px-A-Cat.jpg",
    "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_640.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d4/Cat_March_2010-1a.jpg"
];

//replace the 1st image with 2nd, then 3rd then reset to 1st
// Use set Interval to update every 3 seconds
let currentImageIndex = 0;

// move to the next image
// update the DOM to show it
// Keep track of the current index
// direction = either "prev" or "next"
function updateImage(direction){
    if(direction == "next"){
        currentImageIndex++;
    } else if(direction == "prev"){
        currentImageIndex--;
    } else {
        currentImageIndex++;
    }
    console.log(currentImageIndex);


    if(currentImageIndex >= imageUrls.length){
        currentImageIndex = 0;
    }

    if(currentImageIndex < 0){
        currentImageIndex = imageUrls - 1;
    }
    slideShowImage.src = imageUrls[currentImageIndex];

}

setInterval(updateImage, 3000);