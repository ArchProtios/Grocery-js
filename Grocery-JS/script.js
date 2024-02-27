document.getElementById("eraser").addEventListener('click' , () => {
    document.getElementById("groceryItems").textContent = ''
})

document.getElementById("userInput").addEventListener('keydown' , (event) => {
    if( event.key == "Enter" ){
        addItem();
    }
}) 

const addItem = () => {
    const item = document.createElement("h2")
    item.textContent = "-" + document.querySelector("#userInput").value

    item.addEventListener("click", () => {
        if(item.style.textDecoration != "line-through")
            item.style.textDecoration = "line-through";
        else
            item.style.textDecoration = "none";
        }
    )

    document.querySelector("#groceryItems").appendChild(item);
    document.querySelector("#userInput").value = "";
}