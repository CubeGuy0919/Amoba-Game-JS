function CreateBox(){
    let gameBox = document.getElementById("gameBox");
    let boxSize = document.getElementById("sizeSelector").value;

    gameBox.innerHTML = "";
    for (let RowIndex = 0; RowIndex < boxSize; RowIndex++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("boxBlock");
        for (let ColumnIndex = 0; ColumnIndex < boxSize; ColumnIndex++) {
            let newInnerDiv = document.createElement("div");
            newInnerDiv.classList.add("boxCell");
            //newInnerDiv.innerHTML = `<img src="" onclick="DrawIcon(RowIndex, ColumnIndex)">`;
            //newInnerDiv.addEventListener("onclick", DrawIcon(RowIndex, ColumnIndex));
            newInnerDiv.onclick = DrawIcon;
            newDiv.append(newInnerDiv);
        }
        gameBox.append(newDiv);
    }
}

function UpdateSizeShower(value){
    document.getElementById("sizeShower").textContent = value;
}

function DrawIcon(){
    let iconType = document.getElementById("iconType");
    if (this.children.length == 0) {
        let iconImg = document.createElement("img");
        iconImg.src = iconType.checked ? "Images/X Icon.png" : "Images/O Icon.png";
        iconImg.classList.add("iconImg");
        this.append(iconImg);
    }
}
    // for (let rowIndex = 0; rowIndex < gameBox.length; rowIndex++) {
    //     if (rowIndex == DrawToRowIndex) {
    //         for (let columnIndex = 0; columnIndex < gameBox[rowIndex].length; columnIndex++) {
    //             if (columnIndex == DrawTColumnIndex) {
    //                 gameBox[rowIndex][columnIndex].innerHTML = `<img src="Images/${iconType}.png" class="icon">`;
    //                 console.log("DRAW!");
    //                 break;
    //             }   
    //         }
    //     }
    // }
