// Your code goes here

//one event
const bus = document.querySelector(".intro img")
bus.addEventListener('mouseout', function(event){
    bus.src = "https://64.media.tumblr.com/tumblr_lf1xndP5Dv1qz7lxdo1_500.jpg"
})

//Two event
const letsGo = document.querySelector(".img-content img")
letsGo.addEventListener('click', function(event){
    letsGo.src = "https://cdn.pixabay.com/photo/2014/07/19/07/21/europe-396834_960_720.jpg"
} )
//three event
const adventure = document.querySelector(".img-fluid.rounded")
adventure.addEventListener('dblclick', function(event){
    adventure.src = "https://images2.minutemediacdn.com/image/upload/c_crop,h_1198,w_2131,x_0,y_39/f_auto,q_auto,w_1100/v1562102274/shape/mentalfloss/67705-gettyimages-876987398-main.jpg"
} )

//fourth event
const junket = document.querySelector(".content-destination img")
junket.addEventListener('mouseover', function(event){
    junket.src = "https://upload.wikimedia.org/wikipedia/commons/7/74/The_Lovat_Bridge_and_a_sunken_Boat_on_the_River_Beauly_-_geograph.org.uk_-_87450.jpg"
})


//fifth event
window.addEventListener('contextmenu', function (e) { 
    alert('No can do buddy'); 
    e.preventDefault(); 
  }, false);

//sixth event
const scrollIt = document.querySelector("nav")
    
window.addEventListener("scroll", function() {
    scrollIt.style.transform = "rotate("+window.pageYOffset+"deg)";
    
});

//7th event
const load = document.querySelector('.body')
window.addEventListener('load', function(e) {
    alert ("home page has been loaded")
})

//8th event keydown
window.addEventListener('keydown', ev => {
    ev.target.style.backgroundColor = 'black'
    ev.target.style.color = '#FFFFFF'
  });

//nine event resize.
const hOne = document.querySelector("h1");
window.addEventListener('resize', function (e) {
    hOne.style.fontWeight = 'bold'
    
});

// tenth event
const wheelIt = document.querySelector("section")
    
window.addEventListener("wheel", function() {
    wheelIt.style.transform = "rotate(-"+window.pageYOffset+"deg)";
    
});
// para.addEventListener('onselect', function(event){
//     para.textContent = "Now you've done it. It's Gone"
// })
// const para = document.querySelectorAll ('p')

// para.addEventListener('select', function(event) {
//     for (let i =0; i < para.length; i++){
//         para[i].style.color = "orange"
//     }
// })
// Array.from(document.p).forEach(function (event) {
//     link.addEventListener('click', function (event) {
     