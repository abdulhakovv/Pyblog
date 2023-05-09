let elmoon_dark_light_btn = document.querySelector(".header-inner__services-moon")
let elsun_dark_light_btn = document.querySelector(".header-inner__services-sun")
let elInput_search = document.querySelector(".services__search-input")
let elhistory_list = document.querySelector(".services__history-list")
let elEssay_link = document.querySelector(".services__essay-link")
let elEssay_saving = document.querySelector(".services__essay-saving")
let elXmark = document.querySelector(".fa-xmark")
let elComment = document.querySelectorAll(".fa-comment")
let elBookMark = document.querySelectorAll(".book-save")
let elBookTitle = document.querySelector(".post__bookmark-span")

window.addEventListener("click", (evt)=>{
  if(!evt.target.matches(".services__search-input")){
    elhistory_list.classList.remove("active");
  }
})
elBookMark.forEach(item =>{
  item.addEventListener("click", ()=>{
    elEssay_saving.classList.add("show-save")
  })
})
elBookMark.forEach(hov =>{
  hov.addEventListener("mouseover", ()=>{
    elBookTitle.classList.add("title_of_post")
  })
  hov.addEventListener("mouseout", ()=>{
    elBookTitle.classList.remove("title_of_post")
  })
})

setInterval(() => {
  elEssay_saving.classList.remove("show-save")
}, 3000);

elBookMark.forEach(element =>{
  element.addEventListener("click", ()=>{
    element.classList.toggle("fas")
  })
})
elComment.forEach(com =>{
  com.addEventListener("click", ()=>{
    com.classList.add("fas")
  })
})

elmoon_dark_light_btn.addEventListener("click", ()=>{
  document.body.classList.add("dark")
  elsun_dark_light_btn.classList.add("sun-light")
  elmoon_dark_light_btn.classList.add("moon-dark")
})

elsun_dark_light_btn.addEventListener("click", ()=>{
  document.body.classList.remove("dark")
  elsun_dark_light_btn.classList.remove("sun-light")
  elmoon_dark_light_btn.classList.remove("moon-dark")
})

elInput_search.addEventListener("focus", ()=>{
  elhistory_list.classList.add("active");
})

// ==========================================================
// SIDEBAR WITH FILTER

let sidebar = document.querySelector(".sidebar"); 
let filter = document.querySelector(".filter"); 
let crossBtn = document.querySelector(".cross-btn"); 
 
filter.addEventListener("click", ()=>{ 
  sidebar.classList.add("sidebar_active") 
  document.body.classList.add("body_active")
}) 
crossBtn.addEventListener("click", ()=>{ 
  sidebar.classList.remove("sidebar_active") 
  document.body.classList.remove("body_active")
}) 
