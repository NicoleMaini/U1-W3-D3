// mi cerco l'elemento che devo modificare

const addPhrase = document.getElementById("add")
console.log(addPhrase);

const btn = document.querySelector(".btn-style")
console.log(btn);


const genereteList = textInputObj => {
    
    const element = document.createElement("li")
    element.innerText = textInputObj.textInput;
    element.className = "element";
    
    element.onclick = a => {element.classList.toggle("strike")};
    
    const elementsContainer = document.getElementById("task-list-container")
    
    
    const btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";
    btnDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>`;
    btnDelete.onclick = e =>{
        e.currentTarget.parentNode.remove()
    }
    
    element.appendChild(btnDelete);
    elementsContainer.appendChild(element);
    
}

// chiamo la funzione change per entrare in azione quando premo enter

addPhrase.addEventListener("change", (e) => {
    const textInputObj = {textInput: addPhrase.value}
    genereteList(textInputObj)
    addPhrase.value = ""; // aggiunta per far tornare l'imput vuoto
}
)

// chiamo la funzione click per entrare in azione quando premo il bottone

btn.addEventListener("click", (e) => {
    if(addPhrase.value !== ""){ // aggiunta per impedire all'input di eseguirsi
    const textInputObj = {textInput: addPhrase.value}
    genereteList(textInputObj)   
    addPhrase.value = "";}
}
)

