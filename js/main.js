let eldark_light_btn = document.querySelector(".header-inner__services-moon")
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

eldark_light_btn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark")
})

