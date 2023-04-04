const gameboard = document.querySelector(".gameboard");
const info = document.querySelector(".info");
const startCells=["", "", "", "", "", "", "", "", ""];

let go="cross"
info.textContent="Cross Goes First!!!"


const checkScore=function(){
    const allSquare =document.querySelectorAll(".square")
    const win=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    win.forEach((elm)=>{
        const crossWins= elm.every(cell=>
            allSquare[cell].firstChild?.classList.contains("cross")
            )

        if(crossWins){
            info.textContent = "Hurray!!!!! Cross Wins"
            allSquare.forEach(square=> square.replaceWith(square.cloneNode(true)))
        }    
    })
    win.forEach((elm)=>{
        const circleWins= elm.every(cell=>
            allSquare[cell].firstChild?.classList.contains("circle")
            )

        if(circleWins){
            info.textContent = "Hurray!!!!! Circle Wins"
            allSquare.forEach(square=> square.replaceWith(square.cloneNode(true)))
        }    
    })
}


const addGo = function(e){
    console.log(e.target)
    const goDisplay = document.createElement("div")
    goDisplay.classList.add(go);
    e.target.append(goDisplay)
    go = go=== "cross"? "circle": "cross";
    info.textContent = "Its now "+ go + "'s Turn!!!";
    e.target.removeEventListener("click", addGo)
    checkScore();
}

const createBoard = function(){
    startCells.forEach((_,i)=>{
       const cellElements = document.createElement("div")
       cellElements.classList.add("square")
       cellElements.id = i;
       cellElements.addEventListener("click", addGo);
       gameboard.append(cellElements)
    })
}
createBoard();










