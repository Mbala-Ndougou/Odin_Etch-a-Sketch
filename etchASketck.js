const container = document.getElementById("container")
let rows = 16;
let cols = 16;
let size = 1600;



function createGrid(rows, cols) {
    for(let i = 0; i< rows; i++){
        // console.log("Row");
        
        for(let j = 0; j < cols ; j++){
            // console.log("Col");
            
            let item = document.createElement("div")
            item.classList.add("item")
            let cellSize = size/cols
            item.style.width = `${cellSize}px`
            item.style.height = `${cellSize}px`
            
            if(cols <= 100){
                item.addEventListener("mouseover",()=>{
                    item.style.backgroundColor = "grey";
                })       
            }else{
                alert("Mais vous voulez faire sauter le PC ou bien?!")
                return
            }

            container.appendChild(item)
            
        }
    }
}
createGrid(rows,cols)

const btn = document.getElementById("request")
btn.addEventListener("click",()=>{
    container.innerHTML = ""
    console.log(container.textContent);
    
    let rqt = prompt('Choose a number of rows/cols')
 
    
    rows = parseInt(rqt)
    cols = parseInt(rqt)

    
    // console.log(parseInt(container.style.width));


    createGrid(rows, cols)
    
})
document.body.appendChild(btn)