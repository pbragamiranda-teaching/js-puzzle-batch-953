// 1. Select all tiles
const tiles = document.querySelectorAll("td")

const canMove = (tile) => {
  tileColumn = tile.cellIndex
  tileRow = tile.parentElement.rowIndex
  emptyTile = document.querySelector(".empty")
  emptyTileColumn = emptyTile.cellIndex
  emptyTileRow = emptyTile.parentElement.rowIndex

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
         (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
};

const moveTile = (tile) => {
  // z. select empty tile
  const emptyTile = document.querySelector(".empty")
  // a. swap the inner htlm of the tile witht the empty tile
  emptyTile.innerText = tile.innerText
  tile.innerText = ""
  // b. make the tile black (class = empty)
  emptyTile.classList.remove("empty")
  tile.classList.add("empty")
}


// Check if player has won
const checkIfPlayerWins = () => {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => Number.parseInt(e.innerHTML, 10));
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You win!");
  }
};

// // 2. For each tile
tiles.forEach((tile) => {
  // 3. Listen to the click event
  tile.addEventListener("click", (event) => {
    // 4. If it has an empty neighbour
    if (canMove(tile)) {
      // 5. Swap the tile and the empty space
      moveTile(tile)
      checkIfPlayerWins();
      // new_tiles = document.querySelectorAll("td")
      // didIWin(new_tiles)
    };
  });
});


// Creative Idea from Batch 963

// const didIWin = (tiles) => {
//   let winnerArray = [];
//   let perfectArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13" ,"14", "15"]

//   let sum = 0
//   let counter = 0
//   tiles.forEach((tile) => {
//     winnerArray.push(tile.innerText);
//   })

//   winnerArray.pop()

//   winnerArray.forEach((number) => {
//     if (!number === perfectArray[counter]) {
//       sum += 1
//     }
//     counter += 1
//   })
//   console.log(sum === 0)
// }
















// Warm up -> hint button
// const button = document.querySelector("#show-hint");

// button.addEventListener("click", (event) => {
//   console.log(event)
//   const hint = document.querySelector(".hint")
//   hint.classList.add("active")
// })
