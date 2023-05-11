
let elMoonSpan = document.querySelector(".moon-span")
let elSunSpan = document.querySelector(".sun-span")
let elInput_search = document.querySelector(".services__search-input")
let elhistory_list = document.querySelector(".services__history-list")
let elEssay_saving = document.querySelector(".services__essay-saving")
let elComment = document.querySelectorAll(".fa-comment")
let elBookMark = document.querySelectorAll(".book-save")
let elSecondLoop = document.querySelector(".second-loop")
let elSearchHistory = document.querySelector(".header-inner__services-history")

elMoonSpan.addEventListener("click", ()=>{
  document.body.classList.add("dark")
  elSunSpan.classList.add("sun-light")
  elMoonSpan.classList.add("moon-dark")
})

elSunSpan.addEventListener("click", ()=>{
  document.body.classList.remove("dark")
  elSunSpan.classList.remove("sun-light")
  elMoonSpan.classList.remove("moon-dark")
})

elSecondLoop.addEventListener("click", ()=>{ 
  elSearchHistory.classList.add("history-anim")
  document.body.classList.add("bod-scrolly")
})

elSearchHistory.addEventListener("click", (evt)=>{
  if(evt.target.matches(".header-inner__services-history")){
    elSearchHistory.classList.remove("history-anim");
    document.body.classList.remove("bod-scrolly")
  }
})

elBookMark.forEach(item =>{
  item.addEventListener("click", ()=>{
    elEssay_saving.classList.add("show-save")
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


