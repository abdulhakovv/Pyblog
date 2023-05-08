let elmoon_dark_light_btn = document.querySelector(".header-inner__services-moon")
let elsun_dark_light_btn = document.querySelector(".header-inner__services-sun")
let elInput_search = document.querySelector(".services__search-input")
let elhistory_list = document.querySelector(".services__history-list")
let elEssay_link = document.querySelector(".services__essay-link")
let elEssay_saving = document.querySelector(".services__essay-saving")
let elXmark = document.querySelector(".fa-xmark")

window.addEventListener("click", (evt)=>{
  if(!evt.target.matches(".services__search-input")){
    elhistory_list.classList.remove("active");
  }
})

elEssay_link.addEventListener("click", ()=>{
  elEssay_saving.classList.add("show-save")
})
elXmark.addEventListener("click", ()=>{
  elEssay_saving.classList.remove("show-save")
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

