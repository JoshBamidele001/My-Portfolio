//change navbar stlyes on scroll

   window.addEventListener('scroll', ()=>{
        document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
   })

   //show/dide//

   const menu = document.querySelector(".nav_menu")
   const menuBtn = document.querySelector("#open-menu-btn")
   const closedn = document.querySelector("#Close-menu-btn");

   menuBtn.addEventListener('click', ()=>{
     menu.style.display = 'block'
   }) 