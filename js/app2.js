var hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
var menu = document.querySelector('.header .nav-bar .nav-list ul');
var menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
var header = document.querySelector('.header.container');

/*Add an event listener to the drop down menu via function*/
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// /*Assign scroll position for header*/
// document.addEventListener('scroll', ()=>{
//     var scroll_position = window.scrollY;
//     if(scroll_position > 300){
//         header.style.backgroundColor = "#C3BCCA";
//     }else{
//         header.style.backgroundColor = "transparent";
//     }
// });

/*Set menu to retract when item is selected*/
menu_items.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
})

