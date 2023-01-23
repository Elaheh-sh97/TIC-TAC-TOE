
let player1;
let player2;
let choosedcells;
let arr = [];
let counter = 0;
document.getElementById("btn").addEventListener("click", function(){
   player1 = prompt("Choose X or O:").toUpperCase();
  sessionStorage.setItem("player1", player1);
  if (player1 == "X") {
    player2 = "O";
    sessionStorage.setItem("player2", player2);
  } else {
    player2 = "X";
    sessionStorage.setItem("player2", player2);
  }
  document.appendChild()
})
//choosing X or O


//choosing cells
function choosingcells(player) {
  choosedcells = document.querySelectorAll(".board div");
  choosedcells.forEach(function (choosedcell, index) {
    choosedcell.addEventListener("click", function () {
      counter = counter + 1;
      if (counter % 2 === 0) {
        player = player2;
      } else {
        player = player1;
      }
      
      if(arr[index]!=="X" && arr[index]!=="O"){
 arr[index] = player;
 choosedcell.textContent = player;
      }else{
        alert("choosen before!");
      }
     
      console.log(arr);
      console.log(counter);

      //winning;
      if (
        arr[0] == arr[1] &&
        arr[1] == arr[2] &&
        (arr[0] == "X" || arr[0] == "O")
      ) {
        if (player1 == player) {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player1 win 🥳"}</h1>`;
        } else {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player2 win 🥳"}</h1>`;
        }
      } else if (
        arr[0] == arr[3] &&
        arr[3] == arr[6] &&
        (arr[0] == "X" || arr[0] == "O")
      ) {
        if (player1 == player) {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player1 win 🥳"}</h1>`;
        } else {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player2 win 🥳"}</h1>`;
        }
      } else if (
        arr[1] == arr[4] &&
        arr[4] == arr[7] &&
        (arr[1] == "X" || arr[1] == "O")
      ) {
        if (player1 == player) {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player1 win 🥳"}</h1>`;
        } else {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player2 win 🥳"}</h1>`;
        }
      } else if (
        arr[2] == arr[5] &&
        arr[5] == arr[8] &&
        (arr[2] == "X" || arr[2] == "O")
      ) {
        if (player1 == player) {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player1 win 🥳"}</h1>`;
        } else {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player2 win 🥳"}</h1>`;
        }
      } else if (
        arr[3] == arr[5] &&
        arr[5] == arr[4] &&
        (arr[3] == "X" || arr[3] == "O")
      ) {
        if (player1 == player) {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player1 win 🥳"}</h1>`;
        } else {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player2 win 🥳"}</h1>`;
        }
      } else if (
        arr[6] == arr[7] &&
        arr[7] == arr[8] &&
        (arr[6] == "X" || arr[6] == "O")
      ) {
        if (player1 == player) {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player1 win 🥳"}</h1>`;
        } else {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player2 win 🥳"}</h1>`;
        }
      } else if (
        arr[2] == arr[4] &&
        arr[4] == arr[6] &&
        (arr[2] == "X" || arr[2] == "O")
      ) {
        if (player1 == player) {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player1 win 🥳"}</h1>`;
        } else {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player2 win 🥳"}</h1>`;
        }
      } else if (
        arr[0] == arr[4] &&
        arr[4] == arr[8] &&
        (arr[0] == "X" || arr[0] == "O")
      ) {
        if (player1 == player) {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player1 win 🥳"}</h1>`;
        } else {
          document.querySelector(
            ".board"
          ).innerHTML = `<h1>${"Player2 win 🥳"}</h1>`;
        }
      }
  else if(counter===9){
     document.querySelector(
       ".board"
     ).innerHTML = `<h1>${"No one wins 😅"}</h1>`;
  }
    });
  });
}

choosingcells();
