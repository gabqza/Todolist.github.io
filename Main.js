let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let input = document.querySelector("input");
    let text = input.value;

    if (text.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
        input.value = "";
        
        li.appendChild(addDeletBtn())

        ul.appendChild(li)
    }
})

function addDeletBtn(){
    let deletBtn = document.createElement("button")
    deletBtn.textContent = "X"

    deletBtn.addEventListener("click", (e)=>{
        let item = e.target.parentElement;
        ul.removeChild(item)
    })

    return deletBtn;
}


