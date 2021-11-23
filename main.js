const input = document.querySelector("input[type = 'text']");
const ul = document.querySelector("ul");
const container = document.querySelector("div");
const lists = document.querySelectorAll("li");
const spans = document.getElementsByTagName("span");
const pencil = document.querySelector("#pencil");
const saveBtn = document.querySelector(".save");
const clearBtn = document.querySelector(".clear");
const closeBtn = document.querySelector(".closeBtn");

function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (event){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    const li = document.createElement("li");
    const spanElement = document.createElement("span");
    const icon = document.createElement("i");
    const newTodo = this.value;
    this.value = " " ;
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);
    deleteTodo();
    }
});

ul.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
    }
  },false
);

pencil.addEventListener('click', function(){
  input.classList.toggle('display');
});


saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  
});

clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

deleteTodo();

loadTodo();