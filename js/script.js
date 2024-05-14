
//for photos in about page
var photos = ['pics/tl(9).jpg','pics/tl(2).jpg', 'pics/tl.jpg','pics/tl.jpg', 'pics/about4.jpg'];
var current = 0;
function next() { 
current++;
if (current == photos.length) { current = 0; }
document.getElementById('image').src = photos[current]; }

function previous () { 
current--;
if (current < 0) { current = photos.length-1; }
 document.getElementById('image').src = photos[current]; }


//for cart shop in products page
function addtocart() {
    var numberOfItems = document.querySelector(".cart-quantity").innerHTML;
    var quantity = parseInt(numberOfItems);
    document.querySelector(".cart-quantity").innerHTML = ++quantity;
}



