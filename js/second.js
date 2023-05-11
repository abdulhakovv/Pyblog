let elInput_search = document.querySelector(".services__search-input")
let elhistory_list = document.querySelector(".services__history-list")

window.addEventListener("click", (evt)=>{
  if(!evt.target.matches(".services__search-input")){
    elhistory_list.classList.remove("active");
  }
})
elInput_search.addEventListener("focus", ()=>{
  elhistory_list.classList.add("active");
})