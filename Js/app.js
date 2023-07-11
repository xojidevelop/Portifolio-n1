// $("button").click(function () {
//     $(".check-icon").hide();
//     setInterval(function () {
//       $(".check-icon").show();
//     }, 2000);
//   });

//   window.addEventListener("DOMContentLoaded",()=>{
    
let elLoader = document.querySelector('.success-checkmark')
let elLoadertwo = document.querySelector('.check-icon')
    setInterval(()=>{
        console.log('ok');
        elLoader.classList.toggle("remove");
    },1000)
  