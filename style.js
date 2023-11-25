
let text = document.getElementById("text")
let list = document.getElementById("lists")

const addList = () => {
    console.log(text.value);
    let button = document.createElement("button")
    let li = document.createElement("li")
    button.innerHTML = "x"
    li.innerHTML = text.value
    list.appendChild(li)
    li.appendChild(button)
    button.classList.add("delete_btn")
    localStorage.setItem("data", text.value)
    text.value = ""
}

list.addEventListener("click", (event)=> {
    if(event.target.tagName === "BUTTON"){
        event.target.parentElement.remove()
    } else if(event.target.tagName === "LI"){
        event.target.classList.toggle("check")
    }
})

