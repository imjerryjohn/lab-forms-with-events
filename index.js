console.log("Code your solution!")
let header = document.querySelector("h1")
header.textContent = "My To-Do's List"
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
 
let unOrdered = document.querySelector("ul")
let list = document.createElement("li")
let listText = event.target.list.value

if(!listText){
    let errorMessage = document.createElement("p")
    errorMessage.textContent = "Please Try Again Later"
       form.append(errorMessage)
}
else {
list.textContent = listText
console.log(listText)
unOrdered.append(list)

let removedMessages = document.querySelectorAll("p")
removedMessages.forEach(message => message.remove())

}
 list.addEventListener("click", () => {
   list.style.textDecoration = "line-through"
 })

})