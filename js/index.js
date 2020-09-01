// Your code goes here



//one event
const bus = document.querySelector(".intro img")
bus.addEventListener('pointerover', function(event){
    bus.src = "https://64.media.tumblr.com/tumblr_lf1xndP5Dv1qz7lxdo1_500.jpg"

})
//one.five event not workigng
bus.addEventListener('pointerleave', function(event){
    bus.scr = "/fun-bus.927a34f2.jpg"
})   

//Two event
const letsGo = document.querySelector(".img-content img")
letsGo.addEventListener('click', function(event){
    letsGo.src = "https://cdn.pixabay.com/photo/2014/07/19/07/21/europe-396834_960_720.jpg"
} )
//three event
const adventure = document.querySelector(".img-fluid.rounded")
adventure.addEventListener('click', function(event){
    adventure.src = "https://images2.minutemediacdn.com/image/upload/c_crop,h_1198,w_2131,x_0,y_39/f_auto,q_auto,w_1100/v1562102274/shape/mentalfloss/67705-gettyimages-876987398-main.jpg"
} )

//fourth event

    
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
     