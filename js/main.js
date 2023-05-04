let elmoon_dark_light_btn = document.querySelector(".header-inner__services-moon")
let elsun_dark_light_btn = document.querySelector(".header-inner__services-sun")
let elInput_search = document.querySelector(".services__search-input")
let elhistory_list = document.querySelector(".services__history-list")

elInput_search.addEventListener("focus", ()=>{
  elhistory_list.classList.add("active")
})
window.addEventListener("click", (evt)=>{
  if(!evt.target.matches(".services__search-input")){
    elhistory_list.classList.remove("active")
  }
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


